import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

export default class Header extends Component {

    onSearch(input){

        this.props.searchProducts(input);

    }

    render() {

        let search = _.debounce((input) => {
            this.onSearch(input)
        }, 500)

        return (
            <React.Fragment>

            <div className="row p-0">
                <div className="col-md-12 p-0">
                    <div className="card card--shadow mb-5 fixed-top">
                        <div className="">
                            <nav className="navbar navbar-expand-md col-md-12 ">
                                <div className="container-fluid">
                                    <Link to="/"> <span className="navbar-brand">Product Catelog</span></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarsExampleDefault"
                                            aria-controls="navbarsExampleDefault" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse justify-content-end"
                                         id="navbarsExampleDefault">

                                        <input type="text" className="form-control" aria-label="Small"
                                               aria-describedby="inputGroup-sizing-sm"
                                               onChange={ (e) => {

                                                      search(e.target.value)
                                               }}
                                               placeholder="Search..."/>
                                       
                                        {/*<form className="form-inline my-2 my-lg-0">*/}
                                            {/*<div className="input-group input-group-sm">*/}
                                                {/*<input type="text" className="form-control" aria-label="Small"*/}
                                                       {/*aria-describedby="inputGroup-sizing-sm"*/}
                                                       {/*placeholder="Search..."/>*/}
                                                {/*<div className="input-group-append">*/}
                                                    {/*<button type="button" className="btn btn-secondary btn-number">*/}

                                                        {/*Search*/}
                                                    {/*</button>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</form>*/}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

}
