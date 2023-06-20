import { useLocation, useNavigate } from 'react-router-dom'; 

const withRouter = WrappedComponent => props => {
  const navigate = useNavigate();
  const location = useLocation();
  // other hooks

  return (
    <WrappedComponent
      {...props}
      {...{ navigate, location /* other hooks */ }}
    />
  );
};

export default withRouter;