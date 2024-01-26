import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { daiLogo, ethLogo, optimisonLogo, spinner, usdLogo, usdtLogo, wbtcLogo } from '../assets/images';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import moment from 'moment';

const tableHeaders = [
    "Asset",
    "Amount",
    "Route",
    "Address",
    "Date",
    "Status",
    "Transactions",
    "Fees"
]

const row = [
    {
        asset: {
            icon: ethLogo,
            name: "ETH",
            size: "0"
        },
        amount: 0.000634,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "ETH",
            coin2: "Arbitrum"
        },
        address: "0xb7...66cE",
        date: {
            date: "21 Jan, 2024",
            time: "10:46PM"
        },
        deposit: "0x93..faf6",
        fees: {
            caseOne: "0.562 USDT",
            caseTwo: "0.026%"
        }
    },
    {
        asset: {
            icon: usdtLogo,
            name: "USDT",
        },
        amount: 1.155,
        route: {
            icon: ethLogo,
            icon2: ethLogo,
            coin1: "Arbitrum",
            coin2: "Ethereum"
        },
        address: " 0xF7...1F51",
        date: {
            date: "21 Jan, 2024",
            time: "10:48PM"
        },
        deposit: "0x58..c1d6",
        fees: {
            caseOne: "0.145 USDT",
            caseTwo: "0.036%"
        }
    },
    {
        asset: {
            icon: wbtcLogo,
            name: "WBTC",
        },
        amount: 1.155,
        route: {
            icon: wbtcLogo,
            icon2: optimisonLogo,
            coin1: "Arbitrum",
            coin2: "Optimism"
        },
        address: " 0x5c...37F4",
        date: {
            date: "21 Jan, 2024",
            time: "10:37PM"
        },
        deposit: "0x50..d992",
        fees: {
            caseOne: "0.145 WBTC",
            caseTwo: "0.037%"
        }
    },
    {
        asset: {
            icon: daiLogo,
            name: "DAI",
        },
        amount: 2.140,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "etheruem",
            coin2: "Optimism"
        },
        address: " 0x5c...37G5",
        date: {
            date: "21 Jan, 2024",
            time: "10:35PM"
        },
        deposit: "0x50..d560",
        fees: {
            caseOne: "0.155 WBTC",
            caseTwo: "0.022%"
        }
    },
    {
        asset: {
            icon: ethLogo,
            name: "ETH",
        },
        amount: 1.155,
        route: {
            icon: wbtcLogo,
            icon2: optimisonLogo,
            coin1: "Arbitrum",
            coin2: "Optimism"
        },
        address: " 0x5c...37F3",
        date: {
            date: "21 Jan, 2024",
            time: "10:32PM"
        },
        deposit: "0x50..d567",
        fees: {
            caseOne: "0.145 WBTC",
            caseTwo: "0.032%"
        }
    },
    {
        asset: {
            icon: ethLogo,
            name: "ETH",
        },
        amount: 1.120,
        route: {
            icon: wbtcLogo,
            icon2: optimisonLogo,
            coin1: "Arbitrum",
            coin2: "Optimism"
        },
        address: " 0x5c...37F1",
        date: {
            date: "21 Jan, 2024",
            time: "10:30PM"
        },
        deposit: "0x50..d569",
        fees: {
            caseOne: "0.111 ETH",
            caseTwo: "0.022%"
        }
    },
    {
        asset: {
            icon: usdtLogo,
            name: "USDT",
        },
        amount: 3,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "Arbitrum",
            coin2: "Ethereum"
        },
        address: " 0xF7...1F01",
        date: {
            date: "21 Jan, 2024",
            time: "10:28PM"
        },
        deposit: "0x58..c1d6",
        fees: {
            caseOne: "0.001 USDT",
            caseTwo: "0.036%"
        }
    },
    {
        asset: {
            icon: usdtLogo,
            name: "USDT",
        },
        amount: 0.001,
        route: {
            icon: usdLogo,
            icon2: ethLogo,
            coin1: "Arbitrum",
            coin2: "Ethereum"
        },
        address: " 0xF7...1F00",
        date: {
            date: "21 Jan, 2024",
            time: "10:26PM"
        },
        deposit: "0x58..c1r7",
        fees: {
            caseOne: "0.1 USDT",
            caseTwo: "0.006%"
        }
    },
    {
        asset: {
            icon: wbtcLogo,
            name: "WBTC",
        },
        amount: 1,
        route: {
            icon: wbtcLogo,
            icon2: ethLogo,
            coin1: "Arbitrum",
            coin2: "Ethereum"
        },
        address: " 0x5c...37F4",
        date: {
            date: "21 Jan, 2024",
            time: "10:24PM"
        },
        deposit: "0x50..d992",
        fees: {
            caseOne: "0.145 WBTC",
            caseTwo: "0.037%"
        }
    },
    {
        asset: {
            icon: daiLogo,
            name: "DAI",
        },
        amount: 5,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "etheruem",
            coin2: "Optimism"
        },
        address: " 0x5c...37G0",
        date: {
            date: "21 Jan, 2024",
            time: "10:20PM"
        },
        deposit: "0x50..d568",
        fees: {
            caseOne: "0.190 WBTC",
            caseTwo: "0.029%"
        }
    },
    {
        asset: {
            icon: daiLogo,
            name: "DAI",
        },
        amount: 4.5,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "etheruem",
            coin2: "Optimism"
        },
        address: " 0x5c...37G5",
        date: {
            date: "21 Jan, 2024",
            time: "10:18PM"
        },
        deposit: "0x50..d561",
        fees: {
            caseOne: "0.1 DAI",
            caseTwo: "0.22%"
        }
    },
    {
        asset: {
            icon: wbtcLogo,
            name: "WBTC",
        },
        amount: 0.5,
        route: {
            icon: optimisonLogo,
            icon2: ethLogo,
            coin1: "Arbitrum",
            coin2: "Ethereum"
        },
        address: " 0x5c...37F4",
        date: {
            date: "21 Jan, 2024",
            time: "10:24PM"
        },
        deposit: "0x50..d992",
        fees: {
            caseOne: "0.5 WBTC",
            caseTwo: "0.007%"
        }
    },
    {
        asset: {
            icon: ethLogo,
            name: "ETH",
        },
        amount: 0.00234,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "ETH",
            coin2: "Arbitrum"
        },
        address: "0xb7...66co",
        date: {
            date: "21 Jan, 2024",
            time: "10:16PM"
        },
        deposit: "0x93..faff",
        fees: {
            caseOne: "0.562 ETH",
            caseTwo: "0.026%"
        }
    },
    {
        asset: {
            icon: ethLogo,
            name: "ETH",
        },
        amount: 1.000632,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "ETH",
            coin2: "Arbitrum"
        },
        address: "0xb7...66cE",
        date: {
            date: "21 Jan, 2024",
            time: "10:14PM"
        },
        deposit: "0x93..faf6",
        fees: {
            caseOne: "0.001 USDT",
            caseTwo: "0.006%"
        }
    },
    {
        asset: {
            icon: ethLogo,
            name: "ETH",
        },
        amount: 0.000634,
        route: {
            icon: usdtLogo,
            icon2: optimisonLogo,
            coin1: "ETH",
            coin2: "Arbitrum"
        },
        address: "0xb7...89cq",
        date: {
            date: "21 Jan, 2024",
            time: "10:46PM"
        },
        deposit: "0x93..u4rt",
        fees: {
            caseOne: "0.062 ETH",
            caseTwo: "0.026%"
        }
    },
    {
        asset: {
            icon: ethLogo,
            name: "ETH",
        },
        amount: 0.5,
        route: {
            icon: ethLogo,
            icon2: optimisonLogo,
            coin1: "ETH",
            coin2: "Arbitrum"
        },
        address: "0xb7..xx0e",
        date: {
            date: "21 Jan, 2024",
            time: "10:46PM"
        },
        deposit: "0x93..pu6t",
        fees: {
            caseOne: "0.023 USDT",
            caseTwo: "0.023%"
        }
    },
]

export default function CustomTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const formattedDate = moment().format("DD MMM, YYYY");

    return (
        <div className=' bg-transparent'>
            <TableContainer className='border border-zinc-700 rounded-t-2xl' >
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow className='text-zinc-100' key={index}>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#FFFFFF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <div className='flex items-center gap-6'>
                                                <img src={row.asset.icon} alt='' className='w-[30px]' />
                                                <div>
                                                    <h4 className='text-zinc-300'>{row.asset.name}</h4>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <h4>{row.amount}</h4>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <div className='flex items-center gap-3'>
                                                <div>
                                                    <img src={row.route.icon} alt='' className='w-[17px]' />
                                                </div>
                                                <div>
                                                    <div className='flex items-center gap-1'>
                                                        <div><HiOutlineArrowNarrowRight /></div>
                                                        <div>{row.route.coin1}</div>
                                                    </div>
                                                    <div className='text-zinc-400 text-sm'>{row.route.coin2}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <div>
                                                <div className='flex items-center gap-1'>
                                                    <div><HiOutlineArrowNarrowRight /></div>
                                                    <div>{row.address}</div>
                                                </div>
                                                <div className='text-zinc-400 text-sm'>{row.address}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <div>
                                                <div className='flex items-center gap-1'>
                                                    <div>{formattedDate}</div>
                                                </div>
                                                <div className='text-zinc-400 text-sm'>{row.date.time}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <div className='flex items-center gap-2'>
                                                <div>Processing...</div>
                                                <img src={spinner} alt='' className='w-[17px]' />
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <div className='flex items-center gap-2'>
                                                <div className='text-zinc-400'>Deposit:</div>
                                                <div className=''>{row.deposit}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell style={{ borderBottom: "1px solid #4C4E57", color: "#E0F3FF", paddingTop: "1em", paddingBottom: "1em" }}>
                                            <div>
                                                <div className='flex items-center gap-1'>
                                                    <div>{row.fees.caseOne}</div>
                                                </div>
                                                <div className='text-zinc-400 text-sm'>{row.fees.caseTwo}</div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={row.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ color: 'white' }}
            />
        </div>
    );
}
