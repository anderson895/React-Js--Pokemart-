import React, { useEffect, useState } from 'react'
import Logo from '../Assets/logo.png'
import message from '../Assets/Screenshot 2023-07-23 101759.png'
import notif from '../Assets/Screenshot 2023-07-23 101804.png'
import drop from '../Assets/Screenshot 2023-07-23 101810.png'
import groupicon from '../Assets/pngegg.png'
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Profile from '../Assets/336897245_760394325703570_2135528582037243127_n.jpg'
import Typography from '@mui/joy/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { TextField,Card, Button,Link } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './Navbar.css'


const myConnectionList = [
  {id:1,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',name:'Frank Devera',location:'#0025'},
  {id:2,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png',name:'Jigglypuff',location:'#0039'},
  {id:3,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',name:'Robert Lucas',location:'#0037'},
  {id:4,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png',name:'Cristina Malubay',location:'#0011'},
  {id:5,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png',name:'ButterFree',location:'#0012'},
]
const myGroups = [
  {id:1,profile:'https://www.pngkit.com/png/detail/694-6944787_pokemon-type-element-design-symbol-sign-icon.png',business:`Farmer's Business Network, Inc.`},
  {id:2,profile:'https://cdn.pixabay.com/photo/2018/05/21/13/06/pokemon-3418257_960_720.png',business:`Farmer's Choice`},
  {id:3,profile:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/2048px-Pok%C3%A9mon_Electric_Type_Icon.svg.png',business:`Farmer Brother`},
  {id:4,profile:'https://w7.pngwing.com/pngs/728/375/png-transparent-pokemon-type-element-design-symbol-sign-icon-fire-flame-burn.png',business:`Agriproducts Networking Group`},
]
const requests = [
  {id:1,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png',name:'Zapdos',location:'#0145',background:'https://img.freepik.com/free-vector/comic-style-background-flat-design_52683-53321.jpg?w=2000'},
  {id:2,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/807.png',name:'Zeraora',location:'#0807',background:'https://wallpapercave.com/wp/wp3831697.jpg'},
  {id:3,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png',name:'Raichu',location:'#0807',background:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e76f3d3-2eb2-4133-b4b8-aa69115a2f6e/d5xkp5v-f90d0223-f78b-41cd-ab44-ffbe15ee34f6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlNzZmM2QzLTJlYjItNDEzMy1iNGI4LWFhNjkxMTVhMmY2ZVwvZDV4a3A1di1mOTBkMDIyMy1mNzhiLTQxY2QtYWI0NC1mZmJlMTVlZTM0ZjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Uy2VfahGdK__Ee8LhEArykqiUP4ulAy0cHG2840psRc'},
  {id:4,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png',name:'Electrode',location:'#0101',background:'https://wallpapercave.com/wp/wp2448227.jpg'},

]
const Suggestions = [
  {id:1,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png',name:'Exeggutor',location:'#0103',background:'https://e0.pxfuel.com/wallpapers/975/227/desktop-wallpaper-an-alolan-battle-exeggutor.jpg'},
  {id:2,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png',name:'Scyther',location:'#0123',background:'https://cdn.wallpapersafari.com/73/6/J0EKC6.png'},
  {id:3,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png',name:'Victreebel',location:'#0071',background:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e849da50-fbb7-47ef-bfdd-afc2a538da46/dd4wdfq-30d40af7-b61a-4ef6-87ee-426081986452.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4NDlkYTUwLWZiYjctNDdlZi1iZmRkLWFmYzJhNTM4ZGE0NlwvZGQ0d2RmcS0zMGQ0MGFmNy1iNjFhLTRlZjYtODdlZS00MjYwODE5ODY0NTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Vduu0abYU8OkTLtsclskXqFpfzoewg6Jy3ZQ1YcwrDM'},
  {id:4,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png',name:'Oddish',location:'#0043',background:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d1f087a-24b4-47a0-906b-7f66a07311f9/dfql2i9-aeeb1c83-d689-4e83-8150-3cbbc35010b7.png/v1/fill/w_1920,h_1190,q_80,strp/oddish___moonlight_by_ishmam_dfql2i9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5MCIsInBhdGgiOiJcL2ZcLzRkMWYwODdhLTI0YjQtNDdhMC05MDZiLTdmNjZhMDczMTFmOVwvZGZxbDJpOS1hZWViMWM4My1kNjg5LTRlODMtODE1MC0zY2JiYzM1MDEwYjcucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iHWN3ydvfnP1LRq63WjD0iDz34BIZirpYsRkP41oE2s'},
]
const join = [
  {id:1,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',name:'Squirtle',location:'#0007',background:'https://images2.alphacoders.com/437/437300.jpg'},
  {id:2,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png',name:'Poliwhirl',location:'#0061',background:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLfgtRePqaOkun0ZSd9sheV-txGSgLuG-kCTD3b8YipKsl1wR-9dP4pbrxttn8MM-Nzo&usqp=CAU'},
  {id:3,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png',name:'Seel',location:'#0086',background:'https://images.alphacoders.com/109/1094092.png'},
  {id:4,profile:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png',name:'Horsea',location:'#0116',background:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCtZep1A0-fYhLM8Y9HDS8lRztEr3McVamA&usqp=CAU'},
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Webpage = () => {
    const drawerWidth = 240;
    const [activeTab,setActiveTab] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    
    const handleTabClick = (index) => {
    setActiveTab(index);
    };
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };


    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const getResponsiveCardStyle = () => {
      if (screenWidth <= 768) {
        return {
          borderRadius: '5px',
          width: '98%',
          display: 'flex',
          border: 'none',
          padding: '0px'
        };
      } else if (screenWidth <= 576) {
        return {
          borderRadius: '0px',
          width: '80%',
          display: 'flex',
          border: 'none',
          padding: '0px'
        };
      } else {
        return {
          borderRadius: '10px',
          width: '90%',
          display: 'flex',
          border: 'none',
          padding: '0px'
        };
      }
    };
    const list = myConnectionList.map((data) =>{
      return (
        <div key={data.id} className='list'>
          <div className='profilename'>
          <div>
          <Avatar sx={{width:'30'}} alt="Travis Howard" src={data.profile} />
          </div>
          <div className='details'>
            <h2>{data.name}</h2>
            <p className='title'>{data.location}</p>
          </div>
          </div>
          
        </div>
      )
    })
    const group = myGroups.map((data) =>{
      return(
        <div key={data.id} className='grouplist'>
        <Avatar sx={{width:'30'}} alt="Travis Howard" src={data.profile} />
        <p style={{marginLeft:'10px',padding:0}}>{data.business}</p>
        </div>
      )
    })
    const req = requests.map((data) =>{
      return(
        <div key={data.id} className='cardprofile'>
        <Card elevation={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'10px',height:'155px',width:'150px',border:'none'}}>
        <div className='backgroundimg' style={{backgroundImage:`url(${data.background})`}}>
          <div style={{border:'2px solid green',padding:'5px',borderRadius:'50%'}}>
          <Avatar alt="Remy Sharp" src={data.profile} size="lg" />
          </div>
        </div>  
        <div style={{margin:'5px'}}>
        <h2 style={{fontSize:'12px'}}>{data.name}</h2>
        <p style={{fontSize:'12px'}}>{data.location}</p>
        </div>
        <div style={{display:'flex'}}>
        <button className='acceptbtn'>
                <span style={{fontSize: '15px', marginRight: '5px' }}>Add</span>
                <span role="img" aria-label="cart" style={{ fontSize: '15px' }}>
                  🛒
                </span>
          </button>
            
        </div>
        </Card>
        </div>
      )
    })
    const suggest = Suggestions.map((data) =>{
      return(
        <div key={data.id} className='cardprofile'>
        <Card elevation={2} sx={{display:'flex',flexDirection:'column',alignItems:'center',height:'170px',width:'170px',border:'none'}}>
        <div className='backgroundimg' style={{backgroundImage:`url(${data.background})`}}>
          <div className='circular' style={{padding:'5px',borderRadius:'50%',position:'relative'}}>
          <Avatar alt="Remy Sharp" src={data.profile} size="lg" />
          </div>
        </div>
          <div style={{margin:'5px'}}>
          <h2 style={{fontSize:'12px'}}>{data.name}</h2>
          <p style={{fontSize:'12px'}}>{data.location}</p>
          </div>
          <button className='acceptbtn'>
                <span style={{fontSize: '15px', marginRight: '5px' }}>Add</span>
                <span role="img" aria-label="cart" style={{ fontSize: '15px' }}>
                  🛒
                </span>
          </button>
        </Card>
        </div>
      )
    })
    const joinlist = join.map((data) =>{
      return(
        <div key={data.id} className='cardprofile'>
        <Card elevation={2} sx={{display:'flex',flexDirection:'column',alignItems:'center',height:'170px',width:'170px',border:'none'}}>
        <div className='backgroundimg' style={{backgroundImage:`url(${data.background})`}}>
          <div className='circular' style={{padding:'5px',borderRadius:'50%',position:'relative'}}>
          <Avatar alt="Remy Sharp" src={data.profile} size="lg" />
          </div>
        </div>
          <div style={{margin:'5px'}}>
          <h2 style={{fontSize:'12px'}}>{data.name}</h2>
          <p style={{fontSize:'12px'}}>{data.location}</p>
          </div>
          <div style={{display:'flex'}}>
          <button className='acceptbtn'>
                <span style={{fontSize: '15px', marginRight: '5px' }}>Add</span>
                <span role="img" aria-label="cart" style={{ fontSize: '15px' }}>
                  🛒
                </span>
          </button>
             
          </div>
        </Card>
        </div>
      )
    })
  
    const cardStyle = getResponsiveCardStyle();
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <div style={{display:'flex',alignItems:'flex-start',width:'100%'}}>
          <img style={{width:'60px'}} alt="Travis Howard" src={Logo} />
        </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Products', 'My Network','Messages','Notifications'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
               sx={{
                '&:hover': {
                  backgroundColor: '#f1f1f1', 
                  cursor: 'pointer',
                },
               }}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Edit Profile', 'Change Password', 'Logout'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div key='element1' className='header'>
        <Card className='navsection' style={cardStyle} elevation={3}>
          <div className='menu' onClick={handleDrawerOpen}><MenuIcon/></div>
              <div className='logosearchbar'>
              <img alt="Cindy Baker" src={Logo} 
              />
              <TextField 
              size='small' 
              type="text" 
              className='searchicon'
              fullWidth
              sx={{
                  borderRadius:'30px',
                  backgroundColor:'#f1f3fa',
                  '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent', 
                        borderRadius: '30px',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
              }}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              
              placeholder="Search " 
              />
              </div>
              <div className='tabs'>
              
              </div>
              <div className='components'>
                <div className='username'>
                  <Chip
                      variant="plain"
                      color="neutral"
                      size="lg"
                      sx={{marginLeft:'20px'}}
                      startDecorator={<Avatar size="lg" src={Profile} />}
                  >
                      Joshua Anderson Padilla
                  </Chip>
                </div>
                <div className='icons'>
                
                <Avatar sx={{width:'25px',cursor:'pointer'}} alt="Travis Howard" src={notif} />
                <Avatar sx={{width:'30px',cursor:'pointer',height:'50px',marginTop:'7px'}} alt="Travis Howard" src={drop} />
                </div>
              </div>
        </Card>
        <div key='element2' className='content'>
            <div key='element3' className='content1'>
            <Card sx={{width:'100%',height:'max-Content',borderRadius:'20px',padding:'15px 0px 10px 20px'}}>
                <div className='contentheader'>
                  
                </div>
                <div>
                <div className='myconnectionstitle'>
                  <div className='myconnectionstitle'>
                 
                  <p className='title'> List of pokemon</p>
                  </div>
                  <div>
                  
                  </div>
                </div>
                </div>
                <div className='containerlist'>
                  {list}
                </div>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                  <Link sx={{color:'black',fontSize:'10px'}}>View all</Link>
                </div>
                <div className='myconnectionstitle'>
                <div className='myconnectionstitle'>
               
                  <Typography> Type</Typography>
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div className='mygroups'>
                  {group}
                </div>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                  <Link sx={{color:'black',fontSize:'10px'}}>View all</Link>
                </div>
            </Card>
            </div>
            <div key='element4' className='content2'>
            <Card sx={{width:'100%',height:'max-Content',borderRadius:'20px',overflow:'visible'}}>
              <div style={{textAlign:'center'}}>
                
                <h1 style={{fontSize:'17px',margin:'25px 0px 15px 0px',color:'gray'}}>POKEMART</h1>
                <img style={{width:'20px',height:'25px',marginTop:'-10px'}} alt="Travis Howard" src={groupicon} /> 

              </div>
              <Card className='contentCard' sx={{borderRadius:'12px',border:'0.5px solid #f1f3fa'}}>
                <div className='contentCard1'>
                  <p style={{fontWeight:500}}>Electric Type</p>
                  
                </div>
                <div className='requestlist'>
                  {req}
                </div>
              </Card>
              <Card className='contentCard' sx={{borderRadius:'12px',border:'0.5px solid #f1f3fa'}}>
                <div className='contentCard1'>
                  <p style={{fontWeight:500}}>Grass Type</p>
                 
                </div>
                <div className='requestlist'>
                  {suggest}
                </div>
              </Card>
              <Card className='contentCard' sx={{borderRadius:'12px',border:'0.5px solid #f1f3fa'}}>
                <div className='contentCard1'>
                  <p style={{fontWeight:500}}>Water Type</p>
                 
                </div>
                <div className='requestlist'>
                  {joinlist}
                </div>
              </Card>
            </Card>
            </div>
        </div>
      </div>
    </>
  )
}

export default Webpage