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
        let abc1 = async () =>  
        {
          let cn = params.row
          
          axios
          .post('http://localhost:8000/deletecn', cn)
          .then((res) => console.log('Coin Deleted'))
          .catch(err => {  console.error(err)  })
        };
            
        return <Button onClick={(e) => { e.preventDefault();abc1() }} 
                                variant="contained" color="secondary" href="View"> Delete </Button>
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

export default function Ax()
{
    let [rows, setRows] = useState([])
    const [input, setInput] = useState("");
    
    // function test(labelValue) {
    //   const sign = Math.sign(Number(labelValue));
    //   // Nine Zeroes for Billions
    //   return Math.abs(Number(labelValue)) >= 1.0e9
    //     ? sign * (Math.abs(Number(labelValue)) / 1.0e9) + "B"
    //     : // Six Zeroes for Millions
    //     Math.abs(Number(labelValue)) >= 1.0e6
    //     ? sign * (Math.abs(Number(labelValue)) / 1.0e6) + "M"
    //     : // Three Zeroes for Thousands
    //     Math.abs(Number(labelValue)) >= 1.0e3
    //     ? sign * (Math.abs(Number(labelValue)) / 1.0e3) + "K"
    //     : Math.abs(Number(labelValue));
    // }
    
      const fetchData = async () => {
        await axios.get("/getCoin")
        .then((data1) => {
            let data2 = data1.data    
            setRows(data2.map((x) => {
              return ({'id':x.id,'cname':x.cname,'symbol':x.symbol,'market_cap':(x.market_cap),'current_price':(x.current_price)})  
            }))        
        })
        .catch(err => console.log(err))
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
          <h6 className="col-sm-3 text-center">Saved Coins</h6>
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
