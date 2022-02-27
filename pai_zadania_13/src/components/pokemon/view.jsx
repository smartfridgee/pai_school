import React from 'react';
import Tile from './tile';
import ToggleButton from '../utlis/toggle_button';
import types from './assets/types.json';
import pokedex from './assets/pokedex.json';
import './view.css';

class View extends React.Component {
    constructor() {
        super();
        this.state = {
            "filter_by_name": null,
            "sort": null,
            "filter": [],
            "tiles": [],
            "active_tiles": [],
        }
        this.id_desc = React.createRef();
        this.id_asc = React.createRef();
        this.name_desc = React.createRef();
        this.name_asc = React.createRef();
    }

    handleSortingButton = async(props) => {
        if(props.is_toggled) {
            if(this.state.sort !== null) {
                let previous_button = [this.name_asc, this.name_desc, this.id_asc, this.id_desc][(this.state.sort) - 1];
                previous_button.current.toggleOff();
            }
            await this.setState({"sort": props.value});
        }
        else {
            await this.setState({"sort": null});
        }

        this.handleSorting();
    }

    handleFilteringButton = (props) => {
        const current_filters = this.state.filter;

        if(props.is_toggled) {
            current_filters.push(props.value);
        }
        else {
            if(current_filters.includes(props.value)) {
                current_filters.splice(current_filters.indexOf(props.value), 1);
            }
        }

        this.handleSorting();
    }
    
    handleNameInput = async(event) => {
        await this.setState({"filter_by_name": event.currentTarget.value});
        console.log(this.state.filter_by_name);
        this.handleSorting();
    }

    handleSorting = () => {
        const tiles = this.state.tiles;
        let new_tiles = [];

        if(this.state.filter_by_name !== "" && this.state.filter_by_name !== null) {
            tiles.forEach(tile => {
                if(tile.props.name.includes(this.state.filter_by_name)) {
                    new_tiles.push(tile);
                }
            })
        }
        else {
            new_tiles = tiles;
        }

        if(this.state.sort !== "" && this.state.sort !== null && this.state.sort !== undefined) {
            switch(this.state.sort){
                case 1:
                    new_tiles.sort(function(a, b){
                        if(a.props.name < b.props.name) { return -1; }
                        if(a.props.name > b.props.name) { return 1; }
                        return 0;
                    });
                    break;
                case 2:
                    new_tiles.sort(function(a, b){
                        if(a.props.name < b.props.name) { return 1; }
                        if(a.props.name > b.props.name) { return -1; }
                        return 0;
                    });
                    break;
                case 3:
                    new_tiles.sort(function(a, b){
                        if(a.key < b.key) { return -1; }
                        if(a.key > b.key) { return 1; }
                        return 0;
                    });
                    break;
                case 4:
                    new_tiles.sort(function(a, b){
                        if(a.key < b.key) { return 1; }
                        if(a.key > b.key) { return -1; }
                        return 0;
                    });
                    break;
            }
        }

        if(this.state.filter.length !== 0) {
            this.state.filter.forEach(filter => {
                new_tiles = new_tiles.filter(tile => {return tile.props.type.includes(filter)} )
            })
        }

        this.setState({"active_tiles": new_tiles});
    }

    componentDidMount = () => {
        const tiles = [];
        const lenght = pokedex.length;
        for(let i = 0; i < lenght; i++){
            let image_index = (pokedex[i].id).toString().padStart(3, "000");
            tiles.push(<Tile key={pokedex[i].id} path={image_index} name={pokedex[i].name.english} type={pokedex[i].type}/>)
        }
        this.setState({"tiles": tiles, "active_tiles": tiles});
    }

    render = () => {

        const filter_buttons = [];
        types.forEach(type => {
            filter_buttons.push(<ToggleButton key={type.english} name={type.english} value={type.english} callback={this.handleFilteringButton}/>);
        })

        return(
            <div className="view">
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
                <div className="tiles">
                    { this.state.active_tiles }
                </div>
            </div>
        )
    }
}

export default View;