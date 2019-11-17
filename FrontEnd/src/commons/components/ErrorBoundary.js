import React from 'react'


export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { err: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { err: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.err) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Gặp lỗi khi tải!</h1>
          <p>{this.state.err}</p>
          <button onClick={() => window.location.reload()}>Tải lại</button>
        </div>
      );
    }

    return this.props.children;
  }
}