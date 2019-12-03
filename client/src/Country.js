import React from "react";
import ReactTable from "react-table";
//import './custom.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import '../Bootstrap/css/react-table.css';
import  'react-table/react-table.css';
import axios from 'axios';
import $ from 'jquery';


class Country extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalt: false,
            modal: false,
            couId: '',
            couName: '',
            couIsActive: '',
            couPhoneCode:''
        };
        this.fetchData = this.fetchData.bind(this);
        this.logChange = this.logChange.bind(this);
        this.toggleadd = this.toggleadd.bind(this);
        this.addcountry = this.addcountry.bind(this);
        this.togglepopup = this.togglepopup.bind(this);
        this.closepopup = this.closepopup.bind(this);
        this.afterSaveCell = this.afterSaveCell.bind(this);
        this.isactive = this.isactive.bind(this);
    }

    componentDidMount() {
        this.fetchData();
      
    }
  
    fetchData() {
        var couId = 0;
        var url = 'http://localhost:3000/GetCountryBo';
        axios.post(url, {
            couId: couId
        })
            .then(res => {
               // alert(JSON.stringify(res.data));
                if (res.data.length > 0) {
                    this.setState({
                        data:res.data
                    })
                }
                else {
                    this.setState({
                        data:res.data
                    })
                }
            });
    }

    toggleadd() {

        this.setState({
            modalt: !this.state.modalt
        })
    }
   
    logChange(e) {
        this.setState({
            [e.target.name]: e.target.value //setting value edited by the admin in state.
        });
    }

    addcountry(e) {
        
        e.preventDefault();
        var cname = $('#name').val();
        var ccode = $('#code').val();
        var status = this.status.value;

        var url = "http://localhost:3000/AddCountryBo";
       
        axios.post(url, { couName: cname, couPhoneCode: ccode, couIsActive:status} 
        )
            .then((result) => {
                this.setState({                  
                    modalt: !this.state.modalt
                })
                this.fetchData();
            });
        
    }

    togglepopup(row) {
        //alert(JSON.stringify(row));
        if (row.couId == undefined) {
           
            this.setState({
                modal: this.state.modal
            })
        } else {
           
            this.setState({
                modal: !this.state.modal,
                couId: row.couId,
                couName: row.couName,
                couIsActive: row.couIsActive,
                couPhoneCode: row.couPhoneCode
                
            })
        }
        
    }

    closepopup() {
        this.setState({
            modal: !this.state.modal
        })
    }


    async afterSaveCell(e) {

        e.preventDefault();
        let data = [];
        var status = $('#couIsActive').val();
        var couId = $('#couId').val();
        var couName = $('#couName').val();
        var couPhoneCode = $('#couPhoneCode').val();


        data.push({ "couId": couId }, { "couIsActive": status }, { "couName": couName }, { "couPhoneCode": couPhoneCode });

        var url = 'http://localhost:3000/EditCountryData';
        await axios.post(url, data).then((response) => {
            //alert("Successfully Updated Data");
            this.setState({
                modal: !this.state.modal
            });
            this.fetchData();
        });
    }

    isactive(isact, id) {
        var tblname = "Country";
        var kid = "couId";
        var kactive = "couIsActive";
        var isactive = "";
        if (isact === '1') {
            isactive = '0';

        } else {
            isactive = '1';

        }
        var url = 'http://localhost:3000/IsActive';
        axios.post(url, { isactive, tblname, id, kid, kactive }).then((response) => {
            this.fetchData();
        });
        
    }

    render() {
      
        const mt = {
            'margin-top': 20
        };

        const columns = [

            {
                minWidth: 200,
                width: 200,
                Header: 'Country',
                accessor: 'couName',
                filterable: true
            },
            {
                minWidth: 230,
                width: 230,
                Header: 'Country Code',
                accessor: 'couPhoneCode',
                filterable: false
            },

            {
                minWidth: 280,
                width: 280,
                Header: 'Status',
                accessor: 'couIsActive',
                filterable: false,
                Cell: (row) => {
                    if (row.original.couIsActive == "1") {
                        return <div style={{ textAlign: 'center' }}>
                            <button type="button" className='btn btn-sm btn-primary' style={{ marginLeft: '5px' }} onClick={() => { this.isactive(row.original.couIsActive, row.original.couId); }}><i class="fa fa-check" id="icon"></i> Active</button>
                        </div>
                    } else {

                        return <div style={{ textAlign: 'center' }}>
                            <button type="button" className='btn btn-sm btn-danger' style={{ marginLeft: '5px' }} onClick={() => { this.isactive(row.original.couIsActive, row.original.couId); }}><i class="fa fa-exclamation" id="icon"></i> InActive</button>
                        </div>
                    }

                }
            },
                 
            {
                minWidth: 200,
                width: 200,
                Header: 'Action',
                filterable: false,
                Cell: row => (

                    <div>
                        <tr>
                            <td>
                                <button type="button" className="btn btn-sm btn-success" style={{ marginLeft: '65px' }} onClick={() => { this.togglepopup(row.original); }}><i class="fa fa-edit" id="icon"></i> Edit</button>

                            </td>

                        </tr>
                    </div>

                )
            }
        ]

        return (

            <div>

                <Modal isOpen={this.state.modal} toggle={this.togglepopup} className="producttableadd">
                    <ModalHeader toggle={this.closepopup}>Edit Country</ModalHeader>
                    <ModalBody>
                        <form id="formid" enctype="multipart/form-data" onSubmit={this.afterSaveCell}>

                            <div className="row" style={mt}>
                                <div className="col-sm-2">
                                    
                                </div>
                                <div className="col-sm-6">
                                    <input type="hidden" onChange={this.logChange} required className="form-control" name="couId" id="couId" value={this.state.couId} />
                                </div>
                                <div className="col-sm-4">

                                </div>
                            </div>

                            <div className="row" style={mt}>
                                <div className="col-sm-2">
                                    <label for="sel1">Country Name</label>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" onChange={this.logChange} required className="form-control" name="couName" id="couName" value={this.state.couName} />
                                </div>
                                <div className="col-sm-4">

                                </div>
                            </div>

                            <div className="row" style={mt}>
                                <div className="col-sm-2">
                                    <label for="sel1">Country Code</label>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" onChange={this.logChange} required className="form-control" name="couPhoneCode" id="couPhoneCode" value={this.state.couPhoneCode} />
                                </div>
                                <div className="col-sm-4">

                                </div>
                            </div>

                            <div className="row" style={mt}>
                                <div className="col-sm-2">
                                    <label for="sel1">Status</label>
                                </div>
                                <div className="col-sm-6">
                                    <select className="form-control" id="couIsActive" ref={(input) => this.status = input} value={this.state.couIsActive} name='couIsActive' onChange={this.logChange} required>
                                        <option value=''>Select Status</option>
                                        <option value='0'>In Active</option>
                                        <option value='1'>Active</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">

                                </div>
                            </div>

                            <div className="row" style={mt}>
                                <div className="col-sm-6">
                                    <input type="submit" value="Save" className="btn btn-primary validate" id="btnsubmit" />
                                    <a className="btn btn-red" onClick={this.closepopup}>Cancel</a>
                                </div>
                            </div>

                        </form>
                    </ModalBody>
                    <ModalFooter>


                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalt} toggle={this.toggleadd} className="producttableadd">
                    <ModalHeader toggle={this.toggleadd}>Add Country</ModalHeader>
                    <ModalBody>
                        <form id="FormUpload" enctype="multipart/form-data" method="POST" onSubmit={this.addcountry} >

                            <div className="row" style={mt}>
                                <div className="col-sm-2">
                                    <label for="sel1">Country Name</label>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" onChange={this.logChange} required className="form-control" name="name" id="name" />
                                </div>
                                <div className="col-sm-4">
                                    
                                </div>
                            </div>

                            <div className="row" style={mt}>
                                <div className="col-sm-2">
                                    <label for="sel1">Country Code</label>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" onChange={this.logChange} required className="form-control" name="code" id="code" />
                                </div>
                                <div className="col-sm-4">

                                </div>
                            </div>


                            <div className="row" style={mt}>
                                <div className="col-sm-2">
                                    <label for="sel1">Status</label>
                                </div>
                                <div className="col-sm-6">
                                    <select className="form-control" id="status" ref={(input) => this.status = input} name='status'  required>
                                        <option value=''>Select Status</option>
                                        <option value='0'>In Active</option>
                                        <option value='1'>Active</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                   
                                </div>
                            </div>

                            <div className="row" style={mt}>
                                <div className="col-sm-6">
                                    <input type="submit" value="Save" className="btn btn-primary validate" id="btnsubmit" />
                                    <a className="btn btn-red" onClick={this.toggleadd}>Cancel</a>
                                </div>
                            </div>


                        </form>
                    </ModalBody>
                    <ModalFooter>


                    </ModalFooter>
                </Modal>
                
                <Button className="btn btn-sm btn-info" onClick={() => { this.toggleadd() }} style={{ width: '80px', marginBottom: '5px' }}><i class="fa fa-plus" id="icon"></i> Add</Button>
                
                <ReactTable
                    //  manual 
                    noDataText="Oh Noes!"
                    data={this.state.data}
                    columns={columns}
                    className="-striped -highlight"
                    defaultPageSize={5}
                    pageSizeOptions={[5, 10, 20, 25, 50]}
                    filterable
                    getTdProps={() => ({
                        style: {
                            textAlign: 'center'
                        }
                    })}
                //pages={this.state.TotalPage}
                //onFetchData={this.onPageChange}

                />
            </div >
        );
    }

}



export default Country