import React from 'react';
import PropTypes from 'prop-types';
import IconMaximize from 'terra-icon/lib/icon/IconMaximize';
import IconMinimize from 'terra-icon/lib/icon/IconMinimize';
import IconUndo from 'terra-icon/lib/icon/IconUndo';

import Page, {
  PageActions, Action, CardLayout, Card,
} from '../../../page';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page6 = ({ onRequestClose }) => {
  const [layoutStyleFill, setLayoutStyleFill] = React.useState(true);
  const [renderCard, setRenderCard] = React.useState(true);

  let content;
  if (renderCard) {
    content = (
      <CardLayout>
        <Card title="Page 6 Details" fill={layoutStyleFill}>
          <p>Page 6 demonstrates the following features:</p>
          <ul>
            <li>Full-page card layout presentation</li>
            <li>Interior card scrolling</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
          <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
          <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
          <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
          <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
          <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
          <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
          <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
          <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
          <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
          <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
          <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
          <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
          <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
          <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
          <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
          <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
          <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
          <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
        </Card>
      </CardLayout>
    );
  } else {
    content = (
      <div
        style={{
          height: layoutStyleFill ? '100%' : 'auto',
          border: '5px solid blue',
          overflow: layoutStyleFill ? 'auto' : 'inherit',
          backgroundColor: 'green',
        }}
      >
        <p>Page 6 demonstrates the following features:</p>
        <ul>
          <li>Full-page card layout presentation</li>
          <li>Interior card scrolling</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
        <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
        <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
        <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
        <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
        <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
        <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna arcu. Suspendisse eget massa vitae lectus viverra consequat. Pellentesque sit amet rhoncus mi, vehicula interdum purus. Fusce tempus sagittis tortor, eu aliquet tortor viverra quis. Nullam tincidunt arcu nec quam dictum, quis congue dui ullamcorper. Mauris pulvinar venenatis ligula ac posuere. In hac habitasse platea dictumst. Praesent tellus nisi, fermentum vel justo sit amet, vestibulum eleifend nulla. Nunc sollicitudin libero eros, nec blandit nisl eleifend ac. Maecenas iaculis urna eu turpis hendrerit laoreet. Suspendisse sed consequat felis. Praesent odio urna, facilisis in iaculis elementum, blandit ut quam. Fusce bibendum sem eget metus consequat aliquet.</p>
        <p>Nullam ex quam, tempor ac fringilla sit amet, malesuada dictum erat. Etiam feugiat nulla justo, dapibus interdum purus venenatis ac. Aenean eget volutpat ex. In et ultrices velit. Vestibulum blandit elit vel lorem semper pretium. Nullam bibendum ex nec mi convallis consectetur. Quisque pretium ipsum vitae arcu convallis tempus. Proin in fermentum arcu. Fusce sit amet elementum lorem, non tincidunt felis.</p>
        <p>Curabitur quis dui sed quam porttitor porttitor a non ante. Vivamus fringilla eros vitae tempus porta. Maecenas imperdiet rutrum turpis sed facilisis. Vestibulum non sodales urna. Praesent congue feugiat sollicitudin. In porttitor sem vitae ante viverra, eu convallis mauris interdum. Fusce sit amet gravida nisl. Sed sodales risus erat, at accumsan augue aliquam in. Nam ut maximus neque, quis efficitur risus. In ut nulla quis justo malesuada tristique. Aliquam in metus id nulla porta laoreet eget in ipsum. Nam non metus porttitor, iaculis enim ut, efficitur sapien. Fusce urna lectus, cursus a lorem in, lacinia mattis mauris. Maecenas sodales turpis id risus porta, sed ultrices nulla scelerisque. Vestibulum fermentum odio eros, sit amet suscipit justo scelerisque non. Proin eleifend nibh viverra leo tempor pretium.</p>
        <p>Pellentesque hendrerit viverra arcu, sit amet tristique ligula malesuada nec. Suspendisse vel bibendum risus, sit amet tempor massa. Nam in justo lacinia, condimentum augue fermentum, mollis libero. Praesent tincidunt nisi non lorem vehicula pulvinar. Curabitur massa nisl, pellentesque sit amet tortor vitae, lacinia mattis quam. Donec eu enim ut mauris vehicula suscipit. Pellentesque nec lacus nisl. Integer id lorem vitae erat blandit ullamcorper. Etiam sodales fermentum velit sit amet elementum. Phasellus tristique eros quis lacus commodo maximus.</p>
      </div>
    );
  }

  return (
    <Page
      pageKey="page-6"
      label="Page 6"
      actions={(
        <PageActions>
          <Action
            actionKey="toggle-layout"
            label="Toggle Layout Style"
            icon={layoutStyleFill ? <IconMaximize /> : <IconMinimize />}
            onSelect={() => setLayoutStyleFill(state => !state)}
          />
          <Action
            actionKey="toggle-content"
            label="Toggle Content"
            icon={<IconUndo />}
            onSelect={() => { setRenderCard(state => !state); }}
          />
        </PageActions>
      )}
      onRequestClose={onRequestClose}
      disablePageScrolling={layoutStyleFill}
    >
      {content}
    </Page>
  );
};

Page6.propTypes = propTypes;

export default Page6;
