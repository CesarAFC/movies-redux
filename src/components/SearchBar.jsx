import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuery, readQuery } from '../actions';
import { useNavigate } from 'react-router-dom';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { Button } from '@mui/material';
import AppMenu from './AppMenu';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}));

export default function SearchBar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { movieQuery } = state.movies;
  const navigate = useNavigate();


  const handleQueryChange = (e) => {
    dispatch(readQuery(e.target.value));
  };
  const handleMoviesButton = () => {
    dispatch(clearQuery());
    navigate(`/movies-redux`); 
  }

  const handleSearch = () => {
    navigate(`/search`); 
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 90,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#2E3B55" }}>
        <Toolbar >
          <AppMenu />
          <Button variant="text" onClick={handleMoviesButton}>
          <TheaterComedyIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />

            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Movies
            </Typography>
          </Button>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={movieQuery}
              onChange={handleQueryChange}
              onClick={handleSearch}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}