import React from 'react';

function LastModifiedUser(props) {
    return (
        <React.Fragment>
            {/* <!-- Último modificado --> */}
            <article className="modificacion">
                <div className="modificacion-imagen"><img src={`http://testing-env.eba-jihi3t4h.us-east-2.elasticbeanstalk.com/images/${props.folder}/${props.img}`} alt="usuario" /></div>
                <div className="modificacion-info">
                    <div className="modificacion-descripcion">
                        <h3>{props.name}</h3>
                        <h3>{props.description}</h3>
                    </div>
                    <div className="modificacion-opciones">
                        <ul>
                            <li><a href={`http://testing-env.eba-jihi3t4h.us-east-2.elasticbeanstalk.com/images/${props.folder}/${props.img}`} target="_blank" rel="noreferrer">Ver foto</a></li>
                        </ul>
                    </div>
                </div>
            </article>
            {/* <!-- /Último modificado --> */}
        </React.Fragment>
    )
}

export default LastModifiedUser;