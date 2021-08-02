import React from 'react';
import {useState, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 100, headerClassName: 'bgprl',},
  {
    field: 'cname',
    headerName: 'Company Name',
    headerClassName: 'bgprl txtal',
    width: 250,
    editable: false,
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    headerClassName: 'bgprl txtal',
    width: 150,
    editable: false,
  },
  {
    field: 'market_cap',
    headerName: 'Market Cap',
    headerClassName: 'bgprl txtal',
    width: 200,
    editable: false,
  },
  {
    field: "act",
    headerName: "Action",
    sortable: false,
    width: 130,
    disableClickEventBubbling: true,
    headerClassName: 'bgprl',
    renderCell: (params) => 
    {

        let abc = () =>  
        {
          let cn = params.row
    
         axios
          .post('http://localhost:8000/savecn', cn)
          .then(() => { console.log('Coin Saved'); })
          .catch(err => {  console.error(err)  })
        };
            
        return <Button onClick={(e) => 
                                      {
                                        e.preventDefault()
                                        abc()
                                      }
                                } 
                                variant="contained" color="primary"> Save </Button>
    }
  },
  {
    field: 'current_price',
    headerName: 'Current Price',
    headerClassName: 'bgprl txtal',
    width: 250,
    editable: false,
  },
];

export default function Pag()
{
    let [rows, setRows] = useState([])
    const [input, setInput] = useState("");
    

      const fetchData = async () => {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_descpage=1&sparkline=false"
        )
        
          await setRows(data.map((x) => {
              return ({'id':x.market_cap_rank,'cname':x.name,'symbol':x.symbol,'market_cap':(x.market_cap),'current_price':(x.current_price)})  
          }))

      };
    
      useEffect(() => {
        fetchData()
      });

     const handleChange = e => {
       e.preventDefault()
       setInput(e.target.value)
     }

     if(input.length > 0)
     {
       rows = rows.filter((i) => {
          return(i.cname.toLowerCase().match(input.toLowerCase()))
       })
     }

     
         
  return (
    <div>
      <div className="container">
      <div className="row">
          <h6 className="col-sm-3 text-center">Coin details table</h6>
          <form noValidate autoComplete="off" className="col-sm-3 bgprl">
          <SearchIcon/><Input color="primary" placeholder="Search by Company Name " onChange={handleChange} value={input} />
          </form>
          </div>
      </div>
      <div className="container m-2" style={{ height:400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
          />

      </div>
    </div>
  );
}