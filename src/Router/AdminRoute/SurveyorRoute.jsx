import { Navigate, useLocation } from "react-router-dom";


import { useContext } from "react";
import useSurveoyor from "../../hooks/useSurveyor";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const SurveyorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSurveyor, isSurveyorLoading] = useSurveoyor();
    const location = useLocation();

    if (loading || isSurveyorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isSurveyor) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default SurveyorRoute;