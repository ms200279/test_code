/**
 * main.jsx - React 애플리케이션의 진입점(Entry Point)
 * 
 * 이 파일은 React 앱을 DOM에 마운트하는 역할을 합니다.
 * - React 18의 createRoot API를 사용하여 앱을 렌더링
 * - StrictMode로 개발 중 잠재적 문제를 감지
 * - 전역 CSS 스타일을 import
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Tailwind CSS 및 커스텀 스타일 로드

// index.html의 #root 요소에 React 앱을 마운트
// StrictMode: 개발 모드에서 잠재적 문제를 감지하고 경고를 표시
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

