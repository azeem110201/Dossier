import Axios from 'axios';
import { properties } from '../utils/properties';
const URL = properties.certificateURL;

export class EducationService {
  static getUniversity = () => {
    return Axios.get(URL + '/university');
  }

  static getDegree = () => {
    return Axios.get(URL + '/degree');
  }

  static getFieldOfStudy = () => {
    return Axios.get(URL + '/field_of_study');
  }

  
}