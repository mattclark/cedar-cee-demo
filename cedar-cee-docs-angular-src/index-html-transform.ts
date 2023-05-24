import {TargetOptions} from '@angular-builders/custom-webpack';

export default (targetOptions: TargetOptions, indexHtml: string) => {
  // should be
  // if (targetOptions.configuration.includes('production')) {
  // but that does not work
  // This is a workaround for now
  if (targetOptions.target === 'serve') {
    indexHtml = indexHtml.replace('https://component.metadatacenter.org/', 'http://localhost:4240/');
  }

  return indexHtml;

};
