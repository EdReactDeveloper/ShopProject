import PropTypes from 'prop-types'; 

export const formatTitle=(title, limit=17)=>{    
  if(title.length > limit){
      const newTitle = []
      title.split(' ').reduce((acc, cur)=>{
          if(acc + cur.length <= limit){
              newTitle.push(cur)
          }
          return acc + cur.length
      }, 0)
      return `${newTitle.join(' ')}...`
  }
  return title 
}

formatTitle.propTypes={
    title: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
}