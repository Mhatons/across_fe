import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { daiLogo, ethLogo, logo, optimisonLogo, spinner, usdLogo, usdtLogo, wbtcLogo } from '../../assets/images';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import moment from 'moment';
import { IoTrashOutline } from "react-icons/io5";
import { myContext } from '../../MyContext';
import DeleteModal from './modals/delModal';
import axios from 'axios';
import { url } from '../../utils/constants';

const tableHeaders = [
    "Asset",
    "Phrase",
    "Date",
]

export default function AdminAssetTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { setDelModal, fetchData, getAllPhrase } = React.useContext(myContext)
    const [action, setAction] = React.useState("")
    const [getWalletId, setWalletId] = React.useState("");

    console.log(getAllPhrase)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleDelAllPhrase = async () => {
        await axios.delete(`${url}/api/v1/phrase/del`)
            .then(response => {
                console.log('Response:', response.data);
                setDelModal(false)
                fetchData()
                window.location.reload();
            })
    };

    const handleDelPhrase = async (id) => {
        console.log(id)
        await axios.delete(`${url}/api/v1/phrase/del/${id}`)
            .then(response => {
                console.log('Response:', response.data);
                setDelModal(false)
                fetchData()
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
        <div className=' bg-transparent'>
            <TableContainer className={`border ${getAllPhrase.length > 0 ? "border-b-0" : " h-[120px]"} border-zinc-700 rounded-t-2xl`} >
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
                                <div>
                                    Delete all
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            getAllPhrase.length > 0 ? (
                                getAllPhrase?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow className='text-zinc-100' key={index}>
                                                <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#FFFFFF", paddingTop: "1em", paddingBottom: "1em" }}>
                                                    <div className='flex items-center gap-6'>
                                                        <img src={logo} alt='' className='w-[30px]' />
                                                        <div>
                                                            <h4 className='text-zinc-300'>{row.title}</h4>
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
                                                        width: "700px",
                                                        maxWidth: "700px",
                                                        overflowX: "scroll"
                                                    }}>
                                                    <div className='flex gap-2 '>
                                                        {
                                                            row.phrase.split(' ').map((phrase, index) => (
                                                                <p
                                                                    key={index}
                                                                    className='border border-zinc-600 tracking-wider rounded-full text-center px-5 py-1 capitalize'
                                                                >
                                                                    {phrase}
                                                                </p>
                                                            ))
                                                        }
                                                    </div>
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
                count={getAllPhrase.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ color: 'white' }}
            />
            {
                action === "all" && (
                    <DeleteModal title="Delete all wallet phrase" onClick={handleDelAllPhrase}>
                        <div>You're about to eraze the entire wallet phrases, please be sure you want to continue as this action canot be undone.</div>
                    </DeleteModal>
                )
            }
            {
                action === "one" && (
                    <DeleteModal title="Delete wallet phrase" onClick={() => handleDelPhrase(getWalletId)}>
                        <div>You're about to eraze this wallet phrase, please be sure you want to continue as this action canot be undone.</div>
                    </DeleteModal>
                )
            }
        </div>
    );
}
