import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
	// display: 'flex',
	// flexDirection: 'column',
};

export default function RegisterForm(props) {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	return (
	<div>
		<Button className='!w-fit !bg-black !text-white !px-4 !py-2' onClick={handleOpen}>Registrar jugador</Button>
		
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<Box sx={style} className="flex flex-col w-[80%] lg:w-[400px]">
					<Typography id="transition-modal-title" variant="h6" component="h2">
						Registro
					</Typography>

					<TextField 
						id="standard-basic" 
						label="Nombre" 
						variant="standard" 
						value={props.newPlayer.name}
						onChange={(e) => props.setNewPlayer((p)=>({...p, name:e.target.value}))}
						/>

					<TextField 
						id="standard-basic" 
						label="Apodo" 
						variant="standard" 
						value={props.newPlayer.nickName}
						onChange={(e) => props.setNewPlayer((p)=>({...p, nickName:e.target.value}))}
					/>
					
					<Button 
						variant="contained"
						className="!mt-4 !mx-auto !w-fit rounded-md !bg-black text-white group cursor-pointer outline-none"
						onClick={(e) => {
							props.addPlayer("add", handleClose); 
						}}
					>Registrar
					</Button>

				</Box>
			</Fade>
		</Modal>
	</div>	)
}
