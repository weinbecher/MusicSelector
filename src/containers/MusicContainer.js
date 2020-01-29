import React,{Component} from 'react'
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends Component {
    constructor(pros){
        super (pros);
        this.state = {
            allMusic : [],
            selectedMusicIndex: ''
        };

        this.handleSelectedMusic = this.handleSelectedMusic.bind(this);
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then(res => res.feed.entry)
        .then(allMusic => this.setState({allMusic: allMusic}))
        .catch(err => console.err());

    }
    handleSelectedMusic({index}){
        this.setState({selectedMusicIndex: index})
    }

    render(){
        const selectedMusic = this.state.allMusic.find(music => music.id.attributes['im:id'] === this.state.selectedMusicIndex);

        return(
            <div>
                <h2>MusicSelector</h2>
                <MusicSelector allMusic = {this.state.allMusic} musicOnSelect ={this.handleSelectedMusic}>
                </MusicSelector>

                <MusicDetail music={selectedMusic}>

                </MusicDetail>
            </div>
        )
    }

}


export default MusicContainer;
