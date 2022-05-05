import * as React from 'react';

type TabsProps = {
  title?: string;
};

const index: React.FC<TabsProps> = props => {
  const { title = '' } = props;
  console.log(props.children);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const children = React.Children.toArray(props.children);
  console.log(children);
  return <div>{title}</div>;
};

export default index;
