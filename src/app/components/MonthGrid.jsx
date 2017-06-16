import React, { Component } from 'react'
import MonthRow from './MonthRow.jsx'
import TextWithAddBtn from './TextWithAddBtn.jsx'
import PropTypes from 'prop-types'


class MonthGrid extends Component {
    constructor() {
        super();
        this.state = {

            value: {
                totals: {}
            }
        };
    }

    onCellUpdate(field, value, id) {
        this.props.onCellUpdate(field, value, id)
        this.state.value.grandTotal = 0;
        this.calculateTotal(field, value, id)
    }
    calculateTotal(field, value, id) {
        let that = this
        this.props.categories.concat([{
            field: 'total'
        }]).forEach(function(category) {
            that.state.value.totals[category.field] = 0;
            that.props.entries.forEach(function(entry) {
                if (entry.id === id && category.field === field) {
                    that.state.value.totals[category.field] += value;
                } else if (entry[category.field]) {
                    that.state.value.totals[category.field] += entry[category.field];
                }
            })

        })
    }
    render() {
        return (
            <div className="monthly-grid">
    Category:<TextWithAddBtn onPlusClick={this.props.onPlusClick} />
    <table className='table table-striped'>
    <thead>
    <tr>
      {this.props.categories.map(category=>

        <th key={category.field}> {category.text} </th>
      )}
     <th> Total </th>
    </tr>
    </thead>
    <tbody>
      {this.props.entries.map(entry =>
        <MonthRow 
          key={entry.id}
          categories={this.props.categories}
          {...entry}
          onUpdate={(a,b,c)=>this.onCellUpdate(a,b,c)}
        />
      )}
    </tbody>
    <tfoot>
    <tr style={{'fontWeight':'bold'}}>
      {this.props.categories.map(category=>

        <td key={category.field}> {this.state.value.totals[category.field] || 0} </td>
      )}
   <td> {this.state.value.totals.total || 0} </td>
    </tr>
    </tfoot>
    </table>
    <button type='button' onClick={() => this.props.onAddEntryClick(0,0)} >Add</button>
    </div>)

    }
}

MonthGrid.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired).isRequired,
    onAddEntryClick: PropTypes.func.isRequired,
    onPlusClick: PropTypes.func.isRequired,
    onCellUpdate: PropTypes.func.isRequired
}

export default MonthGrid
