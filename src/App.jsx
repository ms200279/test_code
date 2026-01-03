/**
 * App.jsx - 메인 애플리케이션 컴포넌트
 * 
 * 전체 랜딩 페이지의 구조를 정의하는 최상위 컴포넌트입니다.
 * - 5개의 주요 섹션으로 구성 (Hero, Features, Showcase, Banner Grid, CTA)
 * - 스크롤 진행도에 따른 배경색 변화 (현재 미사용, 향후 확장용)
 * - 각 섹션은 Section 컴포넌트로 감싸져 자동 fade-in 애니메이션 적용
 */

import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import BannerGrid from './components/BannerGrid'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  // 스크롤 진행도 훅: 0 (맨 위) ~ 1 (맨 아래)
  const scrollProgress = useScrollProgress()

  // 스크롤 진행도에 따른 배경색 변화 (현재는 CSS 변수만 설정, 실제 사용은 미구현)
  useEffect(() => {
    const updateBackground = () => {
      const progress = scrollProgress
      // hue 계산: 200 (파란색)에서 시작하여 스크롤에 따라 최대 260 (보라색)까지 변화
      const hue = 200 + progress * 60
      // CSS 변수로 저장 (향후 배경색 변화에 사용 가능)
      document.documentElement.style.setProperty('--scroll-hue', `${hue}deg`)
    }

    updateBackground()
  }, [scrollProgress]) // scrollProgress가 변경될 때마다 실행

  return (
    <div className="min-h-screen">
      {/* min-h-screen: 최소 높이를 뷰포트 높이로 설정 */}
      
      {/* 상단 고정 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 영역 */}
      <main className="relative">
        {/* relative: 자식 요소의 absolute positioning 기준점 */}
        
        {/* ========== Hero Section (히어로 섹션) ========== */}
        <Section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* min-h-screen: 전체 화면 높이, flex: 중앙 정렬, pt-20: 헤더 공간 확보 (80px) */}
          
          {/* 배경 그라데이션 레이어 */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
          {/* absolute inset-0: 전체 영역 덮기, bg-gradient-to-br: 대각선 그라데이션, opacity-50: 50% 투명도 */}
          
          {/* 애니메이션 blob(구름 모양) 요소들 */}
          <div className="absolute inset-0">
            {/* 파란색 blob: 왼쪽 상단 */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            {/* w-72 h-72: 288px 크기, mix-blend-multiply: 색상 혼합 모드, blur-xl: 강한 블러, animate-blob: 애니메이션 */}
            
            {/* 보라색 blob: 오른쪽 상단 (2초 지연) */}
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            
            {/* 분홍색 blob: 하단 중앙 (4초 지연) */}
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            {/* left-1/2: 가로 중앙, -bottom-8: 하단에서 약간 위로 */}
          </div>
          
          {/* 히어로 콘텐츠 */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* container: 최대 너비 제한, relative z-10: blob 위에 표시, text-center: 텍스트 중앙 정렬 */}
            
            {/* 메인 헤드라인 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {/* text-4xl: 모바일 36px, md:text-6xl: 태블릿 60px, lg:text-7xl: 데스크톱 72px */}
              Lorem Ipsum Dolor
              <br />
              {/* 그라데이션 텍스트 */}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {/* bg-clip-text: 배경을 텍스트 모양으로 클리핑, text-transparent: 텍스트 색상 투명 (배경이 보이도록) */}
                Sit Amet Consectetur
              </span>
            </h1>
            
            {/* 서브헤드라인 */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {/* text-lg: 18px, max-w-2xl: 최대 너비 672px, mx-auto: 가로 중앙 정렬 */}
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            {/* CTA 버튼 그룹 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* flex-col: 모바일 세로 배치, sm:flex-row: 태블릿 이상 가로 배치, gap-4: 버튼 간 16px 간격 */}
              
              {/* Primary 버튼 (그라데이션) */}
              <button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                // px-8 py-4: 패딩 32px/16px, hover:scale-105: 호버 시 5% 확대
                aria-label="Get Started"
              >
                Get Started
              </button>
              
              {/* Secondary 버튼 (흰색 배경) */}
              <button
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold"
                // border-2: 2px 테두리, hover:border-gray-400: 호버 시 테두리 색상 변경
                aria-label="Learn More"
              >
                Learn More
              </button>
            </div>
          </div>
        </Section>

        {/* ========== Features Section (기능 섹션) ========== */}
        <Section id="features" className="py-16 md:py-24 bg-white">
          {/* py-16 md:py-24: 세로 패딩 64px/96px, bg-white: 흰색 배경 */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* 섹션 헤더 */}
            <div className="text-center mb-12 md:mb-16">
              {/* mb-12 md:mb-16: 하단 여백 48px/64px */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            {/* 기능 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* grid-cols-1: 모바일 1열, md:grid-cols-2: 태블릿 2열, lg:grid-cols-3: 데스크톱 3열 */}
              {/* gap-6 md:gap-8: 그리드 간격 24px/32px */}
              
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:scale-105"
                  // p-6: 패딩 24px, rounded-xl: 둥근 모서리 12px, hover:scale-105: 호버 시 5% 확대
                >
                  {/* 아이콘 (번호) */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                    {/* w-12 h-12: 48px 크기, bg-gradient-to-br: 대각선 그라데이션 */}
                    {num}
                  </div>
                  
                  {/* 카드 제목 */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Feature {num}
                  </h3>
                  
                  {/* 카드 설명 */}
                  <p className="text-gray-600 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ========== Showcase Section (쇼케이스 섹션) ========== */}
        <Section id="showcase" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          {/* bg-gradient-to-br: 회색에서 파란색으로 대각선 그라데이션 */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* 2컬럼 레이아웃: 텍스트 + 이미지 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* grid-cols-1: 모바일 1열, lg:grid-cols-2: 데스크톱 2열, items-center: 세로 중앙 정렬, gap-12: 간격 48px */}
              
              {/* 텍스트 영역 */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Excepteur Sint Occaecat
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  aria-label="Explore More"
                >
                  Explore More
                </button>
              </div>
              
              {/* 이미지 영역 */}
              <div className="relative">
                {/* relative: 장식 요소의 absolute positioning 기준점 */}
                
                {/* 메인 이미지 */}
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500">
                  {/* aspect-video: 16:9 비율 유지, shadow-2xl: 큰 그림자, bg-gradient: 이미지 로딩 전 배경 */}
                  <img
                    src="https://picsum.photos/seed/showcase/800/600"
                    alt="Showcase"
                    className="w-full h-full object-cover"
                    // object-cover: 비율 유지하며 영역 채움
                    loading="lazy"
                    // lazy loading: 뷰포트에 가까워질 때 로드
                  />
                </div>
                
                {/* 장식 요소: 노란색 blob (오른쪽 하단) */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80 blur-2xl"></div>
                {/* w-24 h-24: 96px 크기, blur-2xl: 매우 강한 블러, opacity-80: 80% 투명도 */}
                
                {/* 장식 요소: 분홍색 blob (왼쪽 상단) */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-60 blur-3xl"></div>
                {/* w-32 h-32: 128px 크기, blur-3xl: 가장 강한 블러 */}
              </div>
            </div>
          </div>
        </Section>

        {/* ========== Banner Grid Section (배너 그리드 섹션) ========== */}
        <Section id="banners" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
            {/* 섹션 헤더 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Banner Grid
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
          {/* BannerGrid 컴포넌트: banners.json 데이터를 기반으로 그리드 생성 */}
          <BannerGrid />
        </Section>

        {/* ========== CTA Section (행동 유도 섹션) ========== */}
        <Section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          {/* bg-gradient-to-br: 파란색에서 보라색으로 대각선 그라데이션 배경 */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* text-center: 모든 콘텐츠 중앙 정렬 */}
            
            {/* CTA 헤드라인 */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            
            {/* CTA 설명 */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {/* text-blue-100: 연한 파란색 텍스트 (어두운 배경 위에 가독성 향상) */}
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
              adipisci velit, sed quia non numquam eius modi tempora incidunt.
            </p>
            
            {/* 이메일 구독 폼 */}
            <div className="max-w-md mx-auto">
              {/* max-w-md: 최대 너비 448px, mx-auto: 가로 중앙 정렬 */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* flex-col: 모바일 세로 배치, sm:flex-row: 태블릿 이상 가로 배치 */}
                
                {/* 이메일 입력 필드 */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                  // flex-1: 남은 공간 모두 차지, focus:ring-2: 포커스 시 2px 링, focus:ring-offset: 링 오프셋
                  aria-label="Email address"
                />
                
                {/* 구독 버튼 */}
                <button
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
                  // bg-white: 흰색 배경, text-purple-600: 보라색 텍스트, hover:bg-gray-100: 호버 시 연한 회색
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  )
}

export default App
