import PropTypes from 'prop-types'
//import Clock from '../Clock/Clock';
import Note from '../Note/Note';
import './NoteList.css'

function NoteList({ items, onDelete }) {
  /*console.log(' массив в нотелист', items, items.notes);
  const noteLists = (items.notes === undefined ? null : items.notes.map((item) => (<Note className='clock' note= {item} key={item.id} onDelete={onDelete}/>)));
  */
  const noteLists = items.map((item) => (<Note className='clock' note= {item} key={item.id} onDelete={onDelete}/>));
  console.log(' массив tree в нотелист',noteLists);
  return (
    <div className='clock-list'>
      {noteLists}
    </div>
  )
}

NoteList.propTypes = {
  items: PropTypes.array,
  onDelete:  PropTypes.func,
}

export default NoteList;
