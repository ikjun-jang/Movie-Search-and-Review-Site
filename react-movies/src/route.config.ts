import IndexGenres from "./genres/IndexGenres";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";

import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import MovieDetails from "./movies/MovieDetails";

import FilterMovies from "./movies/FilterMovies";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";

import LandingPage from "./movies/LandingPage";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";
import Register from "./auth/Register";
import Login from "./auth/Login";
import IndexUsers from "./auth/IndexUsers";
//import EditUser from "./auth/EditUser";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true, isAdmin: true},
    {path: '/genres/create', component: CreateGenre, isAdmin: true},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre, isAdmin: true},
    
    {path: '/actors', component: IndexActors, exact: true, isAdmin: true},
    {path: '/actors/create', component: CreateActor, isAdmin: true},
    {path: '/actors/edit/:id(\\d+)', component: EditActor, isAdmin: true},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true, isAdmin: true},
    {path: '/movietheaters/create', component: CreateMovieTheater, isAdmin: true},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater, isAdmin: true},

    {path: '/movies/filter', component: FilterMovies},
    {path: '/movies/create', component: CreateMovie, isAdmin: true},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie, isAdmin: true},
    {path: '/movie/:id(\\d+)', component: MovieDetails},

    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/users', component: IndexUsers, isAdmin: true},
    //{path: '/users/edit/:id', component: EditUser},

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;