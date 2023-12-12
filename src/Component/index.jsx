import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography, RadioGroup, FormControlLabel, Radio, StepIcon, Divider, ListItem, List, ListItemButton, ListItemIcon, ListItemText, Checkbox } from '@mui/material';

import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CancelIcon from '@mui/icons-material/Cancel';
import { typelist } from './db';

const steps = [
    {
        id: 1,
        name: "Landing",

    },
    {
        id: 2,
        name: "E - commerce",
    }, {
        id: 3,
        name: "Corporate"
    }

];
const stepsa = [
    '20',
    '30',
    '50+',
];

const stepsaa = [
    'ASAP',
    '6 weeks',
    '6 weeks',
];




const Home = () => {





    const [selectedStep, setSelectedStep] = useState(null);
    const [type, setType] = useState(0)
    const [page, setPage] = useState(0)
    const [time, settime] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleStepClick = (id) => {
        setSelectedStep(id);

        // Log corresponding text based on the selected step ID
        if (id === 1) {
            console.log("Landing");
            setSelectedStep("Landing");
            setType("100")
            setIsModalOpen(true);
        } else if (id === 2) {
            console.log("E-commerce");
            setSelectedStep("E-commerce");
            setType("200")
        } else if (id === 3) {
            console.log("Corporate");
            setSelectedStep("Corporate");
            setType("300")
        }
    };


    const handleCloseModal = () => {
        // Close the modal
        setIsModalOpen(false);
    };
    const [selectedStepa, setSelectedStepa] = useState(null);

    const handleStepClicka = (id) => {
        setSelectedStepa(id);
        if (id === 1) {
            console.log("20");
            setSelectedStepa("20")
            setPage("100")
        } else if (id === 2) {
            console.log("30");
            setSelectedStepa("30")
            setPage("200")
        } else if (id === 3) {
            console.log("50+");
            setSelectedStepa("50+")
            setPage("300")
        }
    };
    const [selectedStepaa, setSelectedStepaa] = useState(null);

    const handleStepClickaa = (id) => {
        setSelectedStepaa(id);
        if (id === 1) {
            console.log("ASAP");
            setSelectedStepaa("ASAP");
            settime("100")
        } else if (id === 2) {
            console.log("6 weeks");
            setSelectedStepaa("6 weeks");
            settime("200")
        } else if (id === 3) {
            console.log("6 weeks");
            setSelectedStepaa("6 weeks");
            settime("300")
        }
    };


    useEffect(() => {
        const containers = document.querySelectorAll('.containers');

        containers.forEach((container) => {
            container.addEventListener('click', () => {
                container.classList.add('active');
            });
        });


    }, []);

    useEffect(() => {
        const newTotalPrice = Number(type) + Number(page) + Number(time);
        setTotalPrice(newTotalPrice);
    }, [type, page, time]);


    return (
        <>
            <Container maxWidth="sm"  >
                {/* Modal */}
                {isModalOpen && (
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%',  transform: 'translate(-50%, -50%)',backgroundColor: '#FA9723', borderRadius: 2, zIndex: 999, padding: 1 }} onClose={handleCloseModal}>
                        {/* Content for your modal */}
                        <Stack sx={{ justifyContent: 'end', alignContent: 'end', alignItems: 'end' }}>

                            <Typography onClick={handleCloseModal}><CancelIcon /></Typography>
                            <List sx={{ overflow: 'scroll', maxHeight: '200px' }} >
                                {
                                    typelist && typelist.map((data, index) => {
                                        return (
                                            <ListItem key={index} sx={{textWrap:"nowrap"}}

                                            >
                                                <Checkbox

                                                />{data.name}
                                            </ListItem>
                                        )
                                    })
                                }


                            </List>
                        </Stack>
                    </Box>
                )}

                <Box sx={{ bgcolor: '#fff' }} p={2} >
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Typography pt={3} sx={{ justifyContent: 'center', fontSize: 25, fontWeight: 600, fontFamily: "'Lato', sans-serif" }}>
                            Website Easy Calculator
                        </Typography>
                    </Stack>
                    <Stack >
                        <Typography pt={2} sx={{ justifyContent: 'center', fontWeight: 600, fontSize: "13px", fontFamily: "'Lato', sans-serif" }}>
                            CHOOSE A TYPE
                        </Typography>
                        <div className="progressBar" style={{ paddingTop: '20%' }}>
                            <div className={`containers ${selectedStep === 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>
                                <p style={{ position: 'absolute', top: '-140%', fontSize: 10 }}>Landing</p>
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>

                            <div className={`containers ${selectedStep === 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>
                                <p style={{ position: 'absolute', top: '-140%', left: '-18%', fontSize: 10 }}>E-commerce</p>
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>

                            <div className={`containers ${selectedStep === 3 ? 'active' : ''}`} onClick={() => handleStepClick(3)}>
                                <p style={{ position: 'absolute', top: '-140%', left: '-35%', fontSize: 10 }}>Corporate</p>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </Stack>



                    <Stack >
                        <Typography pt={2} sx={{ justifyContent: 'center', fontWeight: 600, fontSize: "13px", fontFamily: "'Lato', sans-serif" }}>
                            NUMBER OF PAGES
                        </Typography>
                        <div className="progressBar" style={{ paddingTop: '20%' }}>
                            <div className={`containers ${selectedStepa === 1 ? 'active' : ''}`} onClick={() => handleStepClicka(1)}>
                                <p style={{ position: "absolute", top: '-140%', left: '10%', fontSize: 10 }}>20</p>
                                <div className="circle"></div>
                                <div className="line"></div>

                            </div>

                            <div className={`containers ${selectedStepa === 2 ? 'active' : ''}`} onClick={() => handleStepClicka(2)}>
                                <p style={{ position: "absolute", top: '-140%', left: '10%', fontSize: 10 }}>30</p>
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>

                            <div className={`containers ${selectedStepa === 3 ? 'active' : ''}`} onClick={() => handleStepClicka(3)}>
                                <p style={{ position: "absolute", top: '-140%', left: '30%', fontSize: 10 }}>50+</p>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </Stack>
                    <Stack >
                        <Typography pt={2} sx={{ justifyContent: 'center', fontWeight: 600, fontSize: "13px", fontFamily: "'Lato', sans-serif" }}>
                            DEVELOPMENT TIME
                        </Typography>
                        <div className="progressBar" style={{ paddingTop: '20%' }}>
                            <div className={`containers ${selectedStepaa === 1 ? 'active' : ''}`} onClick={() => handleStepClickaa(1)}>
                                <p style={{ position: "absolute", top: '-140%', left: "3%", fontSize: 10 }}>ASAP</p>
                                <div className="circle"></div>
                                <div className="line"></div>

                            </div>

                            <div className={`containers ${selectedStepaa === 2 ? 'active' : ''}`} onClick={() => handleStepClickaa(2)}>
                                <p style={{ position: "absolute", top: '-140%', left: "-8%", fontSize: 10 }}>6 weeks</p>
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>

                            <div className={`containers ${selectedStepaa === 3 ? 'active' : ''}`} onClick={() => handleStepClickaa(3)}>
                                <p style={{ position: "absolute", top: '-140%', left: "-31%", fontSize: 10 }}>6 weeks</p>
                                <div className="circle"></div>
                            </div>

                        </div>
                    </Stack>
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', fontFamily: "'Lato', sans-serif" }}>
                        <Typography pt={3} sx={{ justifyContent: 'center', fontWeight: 600 }}>
                            ESTIMINATED PRICE (from/to) :
                        </Typography>
                        <Typography pt={1} sx={{ justifyContent: 'center', fontWeight: 600 }}>
                            $ {totalPrice} - $ {totalPrice}
                        </Typography>
                    </Stack>
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', fontFamily: "'Lato', sans-serif" }}>
                        <Typography py={4} sx={{ justifyContent: 'center', fontWeight: 300 }}>
                            SEND ME EXACT QUOTE
                        </Typography>

                    </Stack>
                    <Stack >
                        <Typography sx={{ justifyContent: 'center', fontWeight: 300, fontFamily: "'Lato', sans-serif" }}>
                            Required  fields
                        </Typography>
                        <TextField id="standard-basic" label="Name" required variant="standard" />
                        <TextField id="standard-basic" label="Email" required variant="standard" />
                        <TextField id="standard-basic" label="Phone" required variant="standard" />
                    </Stack>
                    <Stack >
                        <Typography pt={3} sx={{ justifyContent: 'center', fontWeight: 300, fontFamily: "'Lato', sans-serif" }}>
                            Your Choose
                        </Typography>
                        <Typography pt={1} sx={{ justifyContent: 'center', fontWeight: 100, fontFamily: "'Lato', sans-serif" }}>
                            Project Type: {selectedStep}
                        </Typography>
                        <Typography sx={{ justifyContent: 'center', fontFamily: "'Lato', sans-serif" }}>
                            Num. of pages: {selectedStepa}
                        </Typography>
                        <Typography sx={{ justifyContent: 'center', fontFamily: "'Lato', sans-serif" }}>
                            Dev. time:{selectedStepaa}
                        </Typography>
                        <Typography sx={{ justifyContent: 'center', fontWeight: 300, fontFamily: "'Lato', sans-serif" }}>
                            Estiminated price: <span style={{ fontWeight: 900, fontFamily: "'Lato', sans-serif" }}>{totalPrice} </span> - <span style={{ fontWeight: 900, fontFamily: "'Lato', sans-serif" }}>{totalPrice}  $</span>
                        </Typography>
                    </Stack>
                    <Stack py={4} sx={{ justifyContent: 'center', alignItems: 'center', fontFamily: "'Lato', sans-serif" }}>
                        <button type='submit' style={{ padding: '8px 35px 8px 35px ', fontSize: 16, backgroundColor: "#FA9723", color: 'white', border: '0px solid red' }}>Send Me</button>

                    </Stack>

                </Box>
                <Divider />
            </Container>
        </>
    )
}

export default Home