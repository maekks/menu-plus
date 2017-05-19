import React from 'react';
import ModifyBtn from './ModifyBtn';
import { updateResInfo } from 'actions/RestaurantActions';
import { connect } from 'react-redux';

class InfoForm extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      isFormShowed: false,
      fieldName: "",
      formValue: "",
    };
    this.showForm = this.showForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges(e){
    const {info} = this.props.currentRes;
    e.preventDefault();
    this.props.updateResInfo(info.id, this.state).then(
      this.setState({
        isFormShowed: false,
      })
    );
  }

  cancelChanges(e){
    e.preventDefault();
    this.setState({
      isFormShowed: false,
    });
  }

  showForm(e){
    e.preventDefault();
    this.setState({
      isFormShowed: true,
      fieldName: this.props.name,
      formValue: this.props.data
    });
  }

  onChange(e){
    e.preventDefault();
    this.setState({
      formValue: e.target.value
    })
  }

  render(){
    const isFormShowed = this.state.isFormShowed;
    const formValue = this.state.formValue;
    return(
      <div>
        {isFormShowed ? (
          <form>
            <div className="form-group form-inline">
              <h3>{ this.props.title }</h3>
              <input value={formValue} onChange={this.onChange} className="form-control"/>
              <button className="btn btn-secondary btn-sm" onClick={this.cancelChanges}>Cancel</button>
              <button className="btn btn-primary btn-sm" onClick={this.saveChanges}>Save Changes</button>
            </div>
          </form>
        )
        : (
          <div className="form-inline">
            <h3>{ this.props.title }</h3>
            <span>{this.props.data}</span>
            <ModifyBtn onClick={this.showForm}/>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRes: state.get('currentRes')
  }
}

export default connect(mapStateToProps, { updateResInfo })(InfoForm);
