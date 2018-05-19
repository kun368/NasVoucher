import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

export default class SimpleTestimonial extends Component {
  static displayName = 'SimpleTestimonial';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="simple-testimonial" style={styles.simpleTestimonial}>
        <IceContainer>
          <div style={styles.item}>
            <p style={styles.description}>
              “
              星云兑现券是情侣、朋友间维护增进感情的神器。
              之前的口头约定、之前的许下承诺、之前的打个欠条，不如用星云兑换券发一张。
              而且星云兑换券用的是星云区块链技术，发了兑换券，就不能反悔，不能篡改，永不丢失！
              以后再有人说下次请你吃饭，就把把这个DApp丢给Ta，哈哈哈哈。
              ”
            </p>
            <div style={styles.infoBox}>
              <img
                style={styles.avatar}
                src="https://img.alicdn.com/tfs/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png"
                alt="图像"
              />
              <h5 style={styles.name}>李铁荣</h5>
              <p style={styles.company}>山东某大学优秀学生</p>
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  item: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    textAlign: 'center',
  },
  description: {
    lineHeight: '28px',
    color: '#999',
  },
  infoBox: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
  },
  avatar: {
    width: '64px',
    height: '64px',
  },
  name: {
    margin: '0 15px',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  company: {
    margin: 0,
  },
  simpleTestimonial: {},
};
