import React from 'react';
import { WebView } from 'react-native-webview';

const Map = ({ route }: { route: any }) => {

  const { longitude, latitude } = route.params;
  return (
    <WebView
      source={{ html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.535188758387!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f30de5be595%3A0x61c0ed944cc9b637!2s${latitude}%2C${longitude}!5e0!3m2!1sen!2s!4v1586475146206!5m2!1sen!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>` }}
      style={{ flex: 1 }}
    />
  );
}

export default Map;