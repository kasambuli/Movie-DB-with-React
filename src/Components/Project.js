import React, {
    Component
} from 'react';
import './Image.css';

class Project extends Component {
    constructor() {
        super();
        this.state = {
            overviews: [],
        }
    };

    // imagePath(poster_path) {
    //     const path = "https: //image.tmdb.org/t/p/w500/" + poster_path
    //     return path
    // }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=f0d5eb420321dd173b56e25b8d03f7f2').then(response => {
            return response.json();

        }).then(data => {
            console.log(data)
            let overviews = data.results
            this.setState({ overviews: overviews });
            // console.log("state", this.state.overviews);
        })
    }
    posterPath(path) {
        const poster = "https://image.tmdb.org/t/p/w500/";
        return poster + path
    }
    render() {
        var { overviews } = this.state



        return ( < div className = "Project" >
            <div className = 'container-fluid' >
            <div className = 'row'> {overviews.map((view) => ( <div className = "col-md-6"key = { view.id } >
                    <a href = '#' > < img src = { this.posterPath(view.poster_path) } alt = { view.title }/> </a > 
                    <p> { view.title } </p>  
                    </div >
                ))
            }

            </div > </div > </div>)
        }
    }










    export default Project;