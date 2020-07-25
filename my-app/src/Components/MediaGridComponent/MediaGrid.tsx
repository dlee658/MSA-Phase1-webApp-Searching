import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    image: any;
    description: any;
}
interface IMediaGridProps {
    SearchQuery: (string | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ image: '', description: ''}]);
    useEffect(() => {
//api key git ignore
        fetch('https://api.serpwow.com/live/search?api_key='+process.env.REACT_APP_API_KEY+'&location=New+York%2CNew+York%2CUnited+States&search_type=images&q=' + props.SearchQuery)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setItemArray(response.image_results)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el.image} Description={el.description} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid