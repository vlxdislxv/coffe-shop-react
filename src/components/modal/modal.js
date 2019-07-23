import React from 'react';
import './modal.css';

class Modal extends React.Component {

    state = {
        sugar: 0
    };

    rangeChange = (e) => {
        let id = e.target.id[e.target.id.length - 1];
        let rangePercent = e.target.value;

        if (rangePercent === '1') rangePercent += ' ложка';
        if (rangePercent === '2' || rangePercent === '3' || rangePercent === '4') rangePercent += ' ложки';
        if (rangePercent === '0' || rangePercent === '5') rangePercent += ' ложек';

        this.setState({sugar: rangePercent});
    };

    render() {
        return (
            <div style={{ 'backgroundColor': '#1D1E22' }} className="modal fade" id={"modal" + this.props.id} tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Сахарок</h5>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input onChange={this.rangeChange} name="sugar" type="range" defaultValue="0" max="5"/>
                            <h4>{this.state.sugar}</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-dismiss="modal">Не
                            </button>
                            <button className="btn btn-primary">Заказац</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Modal;
