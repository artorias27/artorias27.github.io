import { DataGrid } from '@mui/x-data-grid';
import "./datatable.css";
import { dataRows, dataColumns } from "../../assets/dataSource";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';

function Datatable() {
    const actionColumn = [
        {
            field: "action",
            headerName: "Actions",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Button variant="contained" color="success">
                            Edit
                        </Button>
                        <div className="delBtn">
                            <DeleteOutlineOutlinedIcon />
                        </div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <div style={{ flexGrow: 1 }}>
                <DataGrid
                    rows={dataRows}
                    columns={dataColumns.concat(actionColumn)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Datatable;