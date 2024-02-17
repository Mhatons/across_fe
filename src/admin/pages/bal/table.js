import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import { IoTrashOutline } from "react-icons/io5";
import axios from 'axios';
import { myContext } from '../../../MyContext';
import { url } from '../../../utils/constants';
import { ethLogo, logo, spinner } from '../../../assets/images';
import DeleteModal from '../../components/modals/delModal';

const tableHeaders = [
    "Address",
    "Balance",
    "Date",
]

export default function BalanceTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { setDelModal } = React.useContext(myContext)
    const [getAllBal, setAllBal] = React.useState([]);
    const [action, setAction] = React.useState("")
    const [getWalletId, setWalletId] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false)

    function fetchData() {
        axios.get(`${url}/api/v1/bal/`)
            .then(response => {
                console.log('Response:', response.data);
                const balArray = response.data.data || [];
                setAllBal(balArray)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleDelAllPhrase = async () => {
        setDelModal(false)
        setIsLoading(true)
        await axios.delete(`${url}/api/v1/bal/del`)
            .then(response => {
                console.log('Response:', response.data);
                fetchData()
                setIsLoading(false)
                window.location.reload();
            }).catch(error => {
                setIsLoading(true)
                console.log(error)
            })
    };

    const handleDelPhrase = async (id) => {
        setIsLoading(true)
        setDelModal(false)
        await axios.delete(`${url}/api/v1/bal/del/${id}`)
            .then(response => {
                console.log('Response:', response.data);
                setDelModal(false)
                fetchData()
                setIsLoading(false)
            }).catch(error => {
                setIsLoading(true)
                console.log(error)
            })
    };

    const formattedDate = (date) => {
        return moment(date).format("DD MMM, YYYY");
    }
    const formattedTime = (date) => {
        return moment(date).format("HH:mm:ss");
    }

    function handleOpenModal(currentAction) {
        setDelModal(true)
        setAction(currentAction);
    }

    return (
        <div className=' bg-transparent '>
            <TableContainer className={`border ${getAllBal.length > 0 ? "border-b-0" : " h-[120px]"} border-zinc-700 rounded-t-2xl`} >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {tableHeaders.map((column, index) => (
                                <TableCell
                                    key={index}
                                    style={{
                                        backgroundColor: "#34353B",
                                        color: "#9DAAB3",
                                        borderBottom: "1px solid #4C4E57",
                                        paddingTop: "8px",
                                        paddingBottom: "8px"
                                    }}
                                >
                                    {column}
                                </TableCell>
                            ))}
                            <TableCell
                                onClick={() => handleOpenModal("all")}
                                style={{
                                    backgroundColor: "#34353B",
                                    cursor: "pointer",
                                    color: "#9DAAB3",
                                    borderBottom: "1px solid #4C4E57",
                                    paddingTop: "8px",
                                    paddingBottom: "8px"
                                }}
                            >
                                <div className=' whitespace-nowrap'>
                                    Delete all
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            getAllBal.length > 0 ? (
                                getAllBal?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow className='text-zinc-100' key={index}>
                                                <TableCell style={{ borderBottom: "1px solid #4C4E57", width: "130px", minWidth: "130px", color: "#FFFFFF", paddingTop: "1em", paddingBottom: "1em" }}>
                                                    <div className='flex items-center gap-3 bg-[#2D2E33]'>
                                                        <img src={ethLogo} alt='' className='w-[30px]' />
                                                        <div>
                                                            <h4 className='text-zinc-300'>ETH {row.balance}</h4>
                                                        </div>
                                                    </div>
                                                </TableCell>

                                                <TableCell
                                                    className='hideScrollBar'
                                                    style={{
                                                        borderBottom: "1px solid #4C4E57",
                                                        color: "#E0F3FF",
                                                        paddingTop: "1em",
                                                        paddingBottom: "1em",
                                                        width: "500px",
                                                        maxWidth: "670px",
                                                        overflowX: "scroll"
                                                    }}>
                                                        <div>{row.addr}</div>
                                                </TableCell>

                                                <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                                    <div className=' text-zinc-300 text-sm gap-1'>
                                                        <div>{formattedDate(row.createdAt)}</div>
                                                        <div className='text-zinc-400 text-[12px]'>{formattedTime(row.createdAt)}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                                    <div onClick={() => { handleOpenModal("one"); setWalletId(row._id) }} className='text-orange-500 text-lg cursor-pointer hover:text-orange-700'><IoTrashOutline /></div>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                            ) : <div className=' m-auto absolute w-[90%] text-center text-zinc-200 py-6'>No Phrase available to display</div>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={getAllBal.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ color: 'white' }}
            />
            {
                action === "all" && (
                    <DeleteModal title="Delete all wallet balance" onClick={handleDelAllPhrase}>
                        <div>You're about to eraze the entire wallet phrases, please be sure you want to continue as this action canot be undone.</div>
                    </DeleteModal>
                )
            }
            {
                action === "one" && (
                    <DeleteModal title="Delete wallet balance" onClick={() => handleDelPhrase(getWalletId)}>
                        <div>You're about to eraze this wallet phrase, please be sure you want to continue as this action canot be undone.</div>
                    </DeleteModal>
                )
            }
            {
                isLoading && (
                    <div className='absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-[#2d2e33a5]'>
                        <img src={spinner} alt='Loading...' className='w-[40px]' />
                    </div>
                )
            }
        </div>
    );
}
