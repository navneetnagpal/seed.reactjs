import { connect } from 'react-redux'
import { addEntry } from '../actions/index.jsx'
import MonthlyGrid from '../components/MonthGrid.jsx'


const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEntryClick: (income,expense) => {
      dispatch(addEntry(income,expense))
    }
  }
}

const VisibleMonthlyGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthlyGrid)

export default VisibleMonthlyGrid