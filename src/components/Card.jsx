/**
 * Card.jsx - 재사용 가능한 카드 컴포넌트
 * 
 * 3가지 variant(기본, 강조, 이미지)와 3가지 size(작음, 중간, 큼)를 지원합니다.
 * 뷰포트에 들어올 때 fade-in + scale 애니메이션이 적용됩니다.
 * 
 * @param {string} variant - 카드 스타일: 'basic' | 'highlighted' | 'image' (기본값: 'basic')
 * @param {string} title - 카드 제목
 * @param {string} description - 카드 설명
 * @param {string} imageSeed - 이미지 variant일 때 사용할 이미지 시드 (Picsum Photos용)
 * @param {string} size - 카드 크기: 'small' | 'medium' | 'large' (기본값: 'medium')
 */

import { useInView } from '../hooks/useInView'

export default function Card({ variant = 'basic', title, description, imageSeed, size = 'medium' }) {
  // 뷰포트 감지: threshold 0.2 = 요소의 20%가 보이면 감지
  const [ref, isInView, hasBeenInView] = useInView({ threshold: 0.2 })

  // 기본 스타일 클래스: 모든 variant에 공통 적용
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300'
  // rounded-xl: 큰 둥근 모서리 (12px)
  // overflow-hidden: 내용이 넘치면 숨김
  // transition-all duration-300: 300ms 전환 효과
  
  // Variant별 스타일 클래스
  const variantClasses = {
    basic: 'bg-white shadow-md hover:shadow-xl border border-gray-100',
    // 기본: 흰 배경, 중간 그림자, 얇은 테두리
    
    highlighted: 'bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg hover:shadow-2xl border-2 border-blue-200',
    // 강조: 파란-보라 그라데이션 배경, 큰 그림자, 두꺼운 테두리
    
    image: 'bg-white shadow-lg hover:shadow-2xl',
    // 이미지: 흰 배경, 큰 그림자 (이미지가 있으므로 테두리 없음)
  }

  // Size별 패딩 클래스
  const sizeClasses = {
    small: 'p-4',   // 16px 패딩
    medium: 'p-6',  // 24px 패딩
    large: 'p-8',   // 32px 패딩
  }

  // 이미지 variant일 때 Size별 높이 클래스
  const imageHeight = {
    small: 'h-32',  // 128px 높이
    medium: 'h-48', // 192px 높이
    large: 'h-64',  // 256px 높이
  }

  return (
    <div
      ref={ref} // IntersectionObserver가 감시할 요소
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        hasBeenInView
          ? 'opacity-100 translate-y-0 scale-100' // 보였을 때: 완전히 보이고 원래 크기
          : 'opacity-0 translate-y-8 scale-95'    // 안 보일 때: 투명하고 아래로 이동, 5% 축소
      } hover:scale-105`} // 호버 시 5% 확대
    >
      {/* 이미지 variant일 때만 이미지 표시 */}
      {variant === 'image' && (
        <div className={`${imageHeight[size]} w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500`}>
          {/* 이미지 컨테이너: size에 따른 높이, 전체 너비, 하단 여백, 그라데이션 배경 */}
          <img
            src={`https://picsum.photos/seed/${imageSeed}/800/600`}
            // Picsum Photos: seed로 동일한 이미지 보장, 800x600 크기
            alt={title}
            className="w-full h-full object-cover"
            // object-cover: 비율 유지하며 영역 채움
            loading="lazy"
            // lazy loading: 뷰포트에 가까워질 때 로드 (성능 최적화)
          />
        </div>
      )}
      
      {/* 카드 헤더: 아이콘 + 제목 */}
      <div className="flex items-center mb-3">
        {/* flex items-center: 가로 배치, 세로 중앙 정렬 */}
        {/* 아이콘: 제목의 첫 글자를 그라데이션 배경에 표시 */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
          {title.charAt(0)} {/* 제목의 첫 글자 */}
        </div>
        {/* 제목 */}
        <h3 className="ml-3 text-lg font-semibold text-gray-900">{title}</h3>
        {/* ml-3: 왼쪽 여백 12px */}
      </div>
      
      {/* 카드 설명 */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {/* text-gray-600: 중간 회색 텍스트 */}
      {/* leading-relaxed: 넓은 줄 간격 (1.625) */}
    </div>
  )
}

