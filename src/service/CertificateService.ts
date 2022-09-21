import { CertificateDetails } from './../components/organisms/Certifications/index';
import Axios from 'axios';
import { properties } from '../utils/properties';
const URL = properties.certificateURL;
const UserURL = properties.certificateUserURL;

export class CertificateService {
  static getCertificates = () => {
    return Axios.get(URL);
  }

  static getCertificatesByPortfolioId = (id: number) => {
    return Axios.get(UserURL + id);
  }

  static postCertificate = (certificate: CertificateDetails) => {
    return Axios.post(URL, certificate);
  }
}