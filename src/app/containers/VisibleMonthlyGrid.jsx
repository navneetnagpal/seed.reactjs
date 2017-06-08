import { connect } from 'react-redux'
import { addEntry, addCategory, updateEntry } from '../actions/index.jsx'
import MonthlyGrid from '../components/MonthGrid.jsx'


const mapStateToProps = (state) => {
    return {
        entries: state.entries,
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddEntryClick: (income, expense) => {
            dispatch(addEntry(income, expense))
        },
        onCellUpdate: (field, value, id) => {
            dispatch(updateEntry(field, value, id))
        },
        onPlusClick: (text) => {
            dispatch(addCategory(text))
        }
    }
}

const VisibleMonthlyGrid = connect(
    mapStateToProps,
    mapDispatchToProps
)(MonthlyGrid)

export default VisibleMonthlyGrid
