import React from "react";


export class Gallery extends React.Component{
    render(){
        return(
            <div className="gallery">
            {
                this.props.photos.slice(0,50).map(photo => {
                    return(
                        <div key={photo.id}>
                            <img src={photo.thumbnailUrl}
                            alt={photo.title}
                            />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}