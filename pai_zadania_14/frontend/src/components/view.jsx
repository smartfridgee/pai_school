import React from 'react';
import './view.css';
import types from './types.json';
import axios from 'axios';
import ToggleButton from './utils/toggle_button';

class View extends React.Component
{
    constructor(){
        super();
        this.state = {
            "filters": [],
            "sorting": null,
            "rows": [],
            "name": "",
        }
        this.id_desc = React.createRef();
        this.id_asc = React.createRef();
        this.name_desc = React.createRef();
        this.name_asc = React.createRef();
    }

    handleNewData = (response) => {
        let new_rows = [];
        response.data.forEach((poke, i) => {
            let image_index = (poke.id).toString().padStart(3, "000");
            new_rows.push(<tr key={poke.id}><td>{i + 1}</td><td>{poke.name.english}</td><td><img src={require(`./images/${image_index}.png`)}/></td><td><button value={poke.id} onClick={(event) => { this.handleDeletion(event) }}>Usuń</button></td></tr>);
        })
        this.setState({"rows": new_rows});
    }

    sendRequestToApi = async() => {
        await axios.get('http://localhost:4000/api', {
            params: {
                "filters": this.state.filters,
                "name": this.state.name,
                "sorting": this.state.sorting,
            }
        })
            .then(response => {
                this.handleNewData(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    handleSortingButton = async(props) => {
        if(props.is_toggled) {
            if(this.state.sorting !== null) {
                let previous_button = [this.name_asc, this.name_desc, this.id_asc, this.id_desc][(this.state.sorting) - 1];
                previous_button.current.toggleOff();
            }
            await this.setState({"sorting": props.value});
        }
        else {
            await this.setState({"sorting": null});
        }

        this.sendRequestToApi();
    }

    handleFilteringButton = async(props) => {
        const current_filters = this.state.filters;

        if(props.is_toggled) {
            current_filters.push(props.value);
        }
        else {
            if(current_filters.includes(props.value)) {
                current_filters.splice(current_filters.indexOf(props.value), 1);
            }
        }

        await this.setState({"filters": current_filters});
        
        this.sendRequestToApi();
    }
    
    handleNameInput = async(event) => {
        await this.setState({"name": event.currentTarget.value});

        this.sendRequestToApi();
    }

    handleDeletion = async(event) => {
        await axios.delete('http://localhost:4000/api', {
            params: {
                "id": event.currentTarget.value,
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

        this.sendRequestToApi();
    }

    componentDidMount = async() => {
        await axios.get('http://localhost:4000/api')
            .then(response => {
                this.handleNewData(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render = () => {

        const filter_buttons = [];
        types.forEach(type => {
            filter_buttons.push(<ToggleButton key={type.english} name={type.english} value={type.english} callback={this.handleFilteringButton}/>);
        })

        return(
            <>
            <input type="text" placeholder='szukaj po nazwie...' onChange={(event) => this.handleNameInput(event)}/>
            <div className="sorting">
                <ToggleButton name="Sortuj po nazwie rosnąco" ref={this.name_asc} value={1} callback={this.handleSortingButton}/>
                <ToggleButton name="Sortuj po nazwie malejąco" ref={this.name_desc} value={2} callback={this.handleSortingButton}/>
                <ToggleButton name="Sortuj po id rosnąco" ref={this.id_asc} value={3} callback={this.handleSortingButton}/>
                <ToggleButton name="Sortuj po id malejąco" ref={this.id_desc} value={4} callback={this.handleSortingButton}/>
            </div>
            <div className="filtering">
                { filter_buttons }
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Lp.</th>
                    <th>Nazwa</th>
                    <th>Obrazek</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.rows.map(el => { return el })
                }
                </tbody>
            </table>
            </>
        )
    }
}

export default View;