
import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FormGroup, FormControlLabel } from "@mui/material";
import { Checkbox } from '@mui/material';
import './Detail.css'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'title',
      headerName: 'Title',
      width: 450,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 550,
      editable: true,
    },
  ]; 

  interface Idata {
    userId : number
    id : number,
    title : string,
    body : string,
  }

const Detail = () => {

    const [data, setData] = useState<Idata[]>([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((res)=>{
            setData(res);
            console.log(res);
        })
    },[]);

  return (
    <div>
    <Box sx={{ minHeight: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
      <UI />
    </div>
  )
}

export default Detail;

const UI = () =>{

   const department =  [
      {
        "id" : 1 ,
        "department": "customer_service",
        "sub_departments": [
          "support",
          "customer_success"
        ]
      },
      {
        "id" : 2 ,
        "department": "design",
        "sub_departments": [
          "graphic_design",
          "product_design",
          "web_design"
        ]
      }
  ];

  return (
    <div className="checkbox-design">
      <FormGroup>

        {
          department.map((i) =>{
            return(
              <div>
                <FormControlLabel control={<Checkbox />} label={i.department} className="department-title"/>
                {/* <FormControlLabel required control={<Checkbox />} label={i.sub_departments.map((subdata)=><div>{subdata}</div>)} /> */}

                {
                  i.sub_departments && i.sub_departments.map(subdata => {
                    return (
                      <FormControlLabel control={<Checkbox />} label={subdata} className="sub-department"/>
                    )
                  })
                }

              </div>
            )
          })
        }
       
            {/* <FormControlLabel required control={<Checkbox />} label={department.map(i => <div>{i.department}</div>)} /> */}
            {/* <FormControlLabel required control={<Checkbox />} label={department.map(i => <div>{i.sub_departments}</div>)} /> */}

          
      </FormGroup>
    </div>
  )
}
