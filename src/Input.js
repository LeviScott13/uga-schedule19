import React from 'react';
import Select from 'react-select';
import './Input.css';

const imgStyle = {
    width:  '220px',
    height: '220px',
    padding: '15px',
}; 
const options = [
    { value: 1, label: 'Week 1: Georgia vs. Vanderbilt', className: 'vanderbilt', name:'Vanderbilt', teamScore: '30', oppScore: '6', flag: require('./Images/flags/vandy.png') },
    { value: 2, label: 'Week 2: Georgia vs. Murray St.', className: 'murray', name:'Murray St.', teamScore: '63', oppScore: '17', flag: require('./Images/flags/murray.png') },
    { value: 3, label: 'Week 3: Georgia vs. Arkansas St.', className: 'arkansaSt', name:'Arkansas St.', teamScore: '55', oppScore: '0', flag: require('./Images/flags/arkSt.png') },
    { value: 4, label: 'Week 4: Georgia vs. Notre Dame', className: 'nd', name:'Notre Dame', teamScore: '23', oppScore: '17', flag: require('./Images/flags/nd.png') },
    { value: 5, label: 'Week 5: Georgia vs. Tennessee', className: 'vols', name:'Tennessee', teamScore: '43', oppScore: '14', flag: require('./Images/flags/vols.png') },
    { value: 6, label: 'Week 6: Georgia vs. South Carolina', className: 'sc', name:'South Carolina', teamScore: '17', oppScore: '20', flag: require('./Images/flags/sc.png') },
    { value: 7, label: 'Week 7: Georgia vs. Kentucky', className: 'kentucky', name:'Kentucky', teamScore: '21', oppScore: '0', flag: require('./Images/flags/kentucky.png') },
    { value: 8, label: 'Week 8: Georgia vs. Florida', className: 'florida', name:'Florida', teamScore: '24', oppScore: '17', flag: require('./Images/flags/florida.png') },
    { value: 9, label: 'Week 9: Georgia vs. Missouri', className: 'missou', name:'Missouri', teamScore: '27', oppScore: '0', flag: require('./Images/flags/missouri.png') },
    { value: 10, label: 'Week 10: Georgia vs. Auburn', className: 'auburn', name:'Auburn', teamScore: '21', oppScore: '14', flag: require('./Images/flags/auburn.png') },
    { value: 11, label: 'Week 11: Georgia vs. Texas A&M', className: 'texam', name:'Texas A&M', teamScore: '19', oppScore: '13', flag: require('./Images/flags/texam.png') },
    { value: 12, label: 'Week 12: Georgia vs. Georgia Tech', className: 'gatech', name:'Georgia Tech', teamScore: '52', oppScore: '7', flag: require('./Images/flags/gatech.png') },
    { value: 13, label: 'Sec Championship: Georgia vs. LSU', className: 'lsu', name:'LSU', teamScore: '10', oppScore: '37', flag: require('./Images/flags/lsu.jpg') },
    { value: 14, label: 'Sugar Bowl: Georgia vs. Baylor', className: 'baylor', name:'Baylor', teamScore: '26', oppScore: '14', flag: require('./Images/flags/baylor.png') }
];
  class Input extends React.Component {
    state = {
    selectedOption: { value: 1, label: 'Week 1: Georgia vs. Vanderbilt', className: 'vanderbilt', name:'Vanderbilt', teamScore: '30', oppScore: '6', flag: require('./Images/flags/vandy.png') },

    };
    handleChange = selectedOption => {
        this.setState(
            {selectedOption},
            () => console.log(`Option selected:`, this.state.selectedOption.name),
        );
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                />
                <div className="scores">
                    <div className="georgia">
                            <h1> Georgia - {this.state.selectedOption.teamScore}</h1>
                    </div>
                    <div className={this.state.selectedOption.className}>
                            <h1>{this.state.selectedOption.name} - {this.state.selectedOption.oppScore}</h1>
                    </div>
                </div>
                <div className="flagContainer">
                    <div className="flag">
                        <img src={require('./Images/flags/uga.png')} alt="" style={imgStyle}/>
                    </div>
                    <div className={this.state.selectedOption.className}>
                        <img src={this.state.selectedOption.flag} alt="" style={imgStyle} />
                    </div>
                </div>
            </div>
        );
    }
  }

export {Input};