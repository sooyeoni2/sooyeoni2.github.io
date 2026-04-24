import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './BallBallBallDetail.module.css'

export default function BallBallBallDetail() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.page}>
      <div className={`${styles.topBar} ${scrolled ? styles.scrolled : ''}`}>
        <button className={styles.back} onClick={() => navigate('/projects')}>
          ← 프로젝트 목록
        </button>
        <span className={styles.label}>
          <img src="/ball_kung.png" alt="뽈뽈뽈" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain', verticalAlign: 'middle', marginRight: '6px' }} />
          뽈뽈뽈 (BallBallBall)
        </span>
      </div>

      <div className={styles.content}>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet" />

        <div className={styles.container}>

          {/* Hero */}
          <div className={styles.hero}>
            <div className={styles.heroLogo}>
              <img src="/images/ball_login.png" alt="뽈뽈뽈 로고" />
            </div>
          </div>
          <div className={styles.heroCard}>
            <h1>
              <img src="/images/app_logo.png" alt="뽈뽈뽈 BallBallBall" style={{ height: '1.6em', verticalAlign: 'middle' }} />
            </h1>
            <p className={styles.subtitle}>언제 어디서나 야구 팬을 연결하는 지속 가능한 커뮤니티 플랫폼</p>
          </div>

          {/* 프로젝트 개요 */}
          <section className={styles.section}>
            <h2>프로젝트 개요</h2>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>프로젝트명</span>
              <span className={styles.overviewValue}>뽈뽈뽈 (BallBallBall)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>개발 기간</span>
              <span className={styles.overviewValue}>2025.01 ~ 2025.02 (6주)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>팀 구성</span>
              <span className={styles.overviewValue}>6명 (FE 2 / BE 4)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>담당 역할</span>
              <span className={styles.overviewValue}>프론트엔드 개발</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>GitHub</span>
              <span className={styles.overviewValue}><a href="#">GitHub 링크</a></span>
            </div>
          </section>

          {/* 기획 배경 */}
          <section className={styles.section}>
            <h2>기획 배경</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              <div style={{ background: 'var(--primary-20)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4em', fontWeight: '800', color: 'var(--primary-100)' }}>1,200만</div>
                <div style={{ fontSize: '0.75em', color: 'var(--text-secondary)', marginTop: '4px' }}>2025 KBO 관중 수</div>
              </div>
              <div style={{ background: 'var(--primary-20)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4em', fontWeight: '800', color: 'var(--primary-100)' }}>75%</div>
                <div style={{ fontSize: '0.75em', color: 'var(--text-secondary)', marginTop: '4px' }}>관람객 중 2~30대 비율</div>
              </div>
              <div style={{ background: 'var(--primary-20)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4em', fontWeight: '800', color: 'var(--primary-100)' }}>76.6%</div>
                <div style={{ fontSize: '0.75em', color: 'var(--text-secondary)', marginTop: '4px' }}>20대 여성 야구 SNS 활동</div>
              </div>
            </div>

            <div className={styles.highlightBanner}>
              <p>
                야구 팬의 <span className={styles.em}>75%가 2~30대</span>로 SNS 활동이 활발하지만,<br />
                커뮤니티는 네이버 카페·인스타그램·트위터 등 <span className={styles.em}>여러 플랫폼에 분산</span>되어 있고<br />
                정보 탐색은 KBO 사이트·뉴스를 별도로 확인해야 하는 불편함이 있었습니다.
              </p>
            </div>

            <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.75', marginTop: '14px' }}>
              오프라인 관람에서도 동행 구하기, 음식 공동 구매, 이동 수단 공유 등 다양한 불편함이 존재했으며,
              분산된 커뮤니티 환경 탓에 원하는 목적을 달성하는 데 불필요한 시간과 노력이 소모되고 있었습니다.
            </p>

            <p style={{ fontSize: '0.92em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '16px' }}>
              이를 해결하기 위해 <strong style={{ color: 'var(--primary-100)' }}>뽈뽈뽈</strong>은
              커뮤니티·정보·동행을 하나로 통합한
              <strong style={{ color: 'var(--primary-100)' }}> 야구 팬 전용 올인원 플랫폼</strong>으로 기획되었습니다.
            </p>
          </section>

          {/* 기술 스택 */}
          <section className={styles.section}>
            <h2>기술 스택</h2>

            <div className={styles.techSectionTitle}>Frontend (Mobile)</div>
            <div className={styles.techTags}>
              <span className={styles.techTag}>Flutter 3.38.7</span>
              <span className={styles.techTag}>Dart 3.10.7</span>
              <span className={styles.techTag}>Riverpod 2.5.1</span>
              <span className={styles.techTag}>Dio 5.4.0</span>
              <span className={styles.techTag}>Retrofit 4.4.1</span>
              <span className={styles.techTag}>GoRouter 17.0.1</span>
              <span className={styles.techTag}>STOMP WebSocket</span>
              <span className={styles.techTag}>Firebase FCM</span>
              <span className={styles.techTag}>WebView</span>
              <span className={styles.techTag}>Secure Storage</span>
            </div>
          </section>

          {/* 주요 기능 */}
          <section className={styles.section}>
            <h2>주요 기능</h2>
            <div className={styles.featureList}>
              {[
                { title: 'AI 동행 추천', desc: '성향 기반 유사도 분석으로 맞춤 동행 매칭' },
                { title: 'AR 길찾기', desc: '야구장 내부 시설 AR 경로 안내' },
                { title: '동행 찾기', desc: '경기 전·후 이동 동행 매칭 및 채팅' },
                { title: '커뮤니티', desc: '자유게시판, 식당 추천, 관람 후기 공유' },
                { title: '더치페이', desc: '동행과 비용을 간편하게 정산' },
                { title: '실시간 알림', desc: 'FCM 기반 채팅 및 매칭 알림' },
              ].map(({ title, desc }, i) => (
                <div key={title} className={styles.featureListItem}>
                  <span className={styles.featureNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.featureListText}>
                    <span className={styles.featureListTitle}>{title}</span>
                    <span className={styles.featureListDesc}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 담당 기능 상세 */}
          <section className={styles.section}>
            <h2>담당 기능 <span className={styles.badge}>7개</span></h2>

            {/* 1. 로그인/로그아웃 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>로그인 / 로그아웃</div>
                  <div className={styles.featureSubtitle}>OAuth 소셜 로그인</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>네이버 OAuth 소셜 로그인 연동</li>
                <li>Deep Link를 활용한 OAuth 콜백 처리</li>
                <li>JWT 토큰 기반 인증 (Access + Refresh Token)</li>
                <li>Flutter Secure Storage 토큰 보안 저장</li>
                <li>로그인 후 FCM 토큰 자동 등록</li>
                <li>신규/기존 유저 분기 처리</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름</div>
              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>로그인 버튼 클릭 (네이버)</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>OAuth 서버 리다이렉트 → Deep Link로 앱 복귀</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>백엔드 API로 토큰 교환 → Secure Storage 저장</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>FCM 토큰 등록</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div></div>
                  <div className={styles.flowText}>신규 유저 → 프로필 설정 / 기존 유저 → 메인 화면</div>
                </div>
              </div>

              <div className={styles.featureLabel}>주요 화면</div>
              <div className={styles.screenshotRow}>
                <div className={styles.screenshotItem}>
                  <img src="/images/login.png" alt="로그인 화면" />
                  <div className={styles.scLabel}>로그인</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/profilesetup.png" alt="프로필 설정" />
                  <div className={styles.scLabel}>프로필 설정</div>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>Deep Link 핸들러를 통한 OAuth 콜백 라우팅</li>
                  <li>Riverpod AuthNotifier로 전역 인증 상태 관리</li>
                  <li>Dio Interceptor 토큰 자동 갱신 처리</li>
                </ul>
              </div>
            </div>

            {/* 2. 더치페이 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>더치페이</div>
                  <div className={styles.featureSubtitle}>더치페이 / 결제 시스템</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>토스페이먼츠 API 모바일 결제 시스템</li>
                <li>더치페이 목록 생성 → 멤버 선택 → 금액 입력 → 결제 전체 플로우</li>
                <li>WebView 기반 토스 결제 화면 연동</li>
                <li>결제 성공/실패 콜백 처리</li>
                <li>더치페이 취소 시 환불 재시도 메커니즘</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름</div>
              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>더치페이 생성 (금액 입력 + 참여 멤버 선택)</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>토스페이먼츠 결제 HTML 생성 → WebView 로딩</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>결제 성공 / 실패 콜백 수신</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>백엔드 결제 확인 API 호출 → 더치페이 상태 업데이트</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div></div>
                  <div className={styles.flowText}>취소 시 환불 API 호출 → 실패 시 재시도</div>
                </div>
              </div>

              <div className={styles.featureLabel}>주요 화면</div>
              <div className={styles.screenshotRow}>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay.gif" alt="더치페이 주요 화면" />
                  <div className={styles.scLabel}>더치페이 흐름</div>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>WebView ↔ Flutter 간 결제 콜백 통신</li>
                  <li>토스페이먼츠 결제 HTML 동적 생성 → WebView 로딩</li>
                  <li>더치페이 상태별 UI 분기 (대기/완료/취소)</li>
                </ul>
              </div>
            </div>

            {/* 3. 프로필 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>프로필 관리</div>
                  <div className={styles.featureSubtitle}>마이 프로필 / 유저 프로필</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>마이 프로필 조회 (닉네임, 자기소개, 프로필 이미지, 동행 온도, 마이팀, 직관기록, 동행목록)</li>
                <li>프로필 수정 (닉네임, 자기소개)</li>
                <li>S3 Presigned URL 프로필 이미지 업로드</li>
                <li>다른 유저 프로필 조회 (동행 히스토리, 온도, 통계)</li>
                <li>동행 온도(신뢰도) 시각화 위젯</li>
              </ul>

              <div className={styles.featureLabel}>주요 화면</div>
              <div className={styles.screenshotRow}>
                <div className={styles.screenshotItem}>
                  <img src="/images/myprofile.png" alt="마이 프로필" />
                  <div className={styles.scLabel}>마이 프로필</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/otherprofile.png" alt="유저 프로필" />
                  <div className={styles.scLabel}>유저 프로필</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/profileupdate.png" alt="프로필 수정" />
                  <div className={styles.scLabel}>프로필 수정</div>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>S3 Presigned URL로 서버 부하 없이 직접 업로드</li>
                  <li>동행 온도 커스텀 시각화 위젯 구현</li>
                </ul>
              </div>
            </div>

            {/* 4. 메뉴 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>메뉴 / 설정</div>
                  <div className={styles.featureSubtitle}>앱 설정 및 정보</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>이용약관 / 개인정보처리방침</li>
                <li>오픈소스 라이선스 안내</li>
                <li>앱 정보 페이지</li>
                <li>로그아웃 (API 호출 + 토큰 삭제 + 화면 전환)</li>
              </ul>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 포인트</div>
                <ul>
                  <li>모듈화된 MenuItemTile 위젯 재사용</li>
                  <li>로그아웃 시 Go Router 자동 리다이렉트</li>
                </ul>
              </div>
            </div>

            {/* 5. 커뮤니티 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>커뮤니티</div>
                  <div className={styles.featureSubtitle}>게시판 / 댓글 / 리액션</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>게시판: 자유 게시판, 맛집 추천, 직관 후기</li>
                <li>게시글 CRUD (작성/조회/수정/삭제)</li>
                <li>이미지 첨부 (S3 업로드)</li>
                <li>댓글 작성/수정/삭제</li>
                <li>이모지 리액션</li>
                <li>무한 스크롤 페이지네이션</li>
              </ul>

              <div className={styles.featureLabel}>주요 화면</div>
              <div className={styles.screenshotRow}>
                <div className={styles.screenshotItem}>
                  <img src="/images/community.png" alt="게시글 목록" />
                  <div className={styles.scLabel}>게시글 목록</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/community1.png" alt="게시글 상세" />
                  <div className={styles.scLabel}>게시글 상세</div>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>Riverpod 무한 스크롤 페이지네이션 상태 관리</li>
                  <li>Firebase Push 실시간 댓글 알림</li>
                  <li>이모지 리액션 통계 효율적 렌더링</li>
                </ul>
              </div>
            </div>

            {/* 6. 동행 평가 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>동행 평가</div>
                  <div className={styles.featureSubtitle}>동행 종료 후 동행인 별점 평가</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>동행 종료 후 함께한 동행인 목록 표시</li>
                <li>동행인 탭 시 별점 평가 다이얼로그 표시</li>
                <li>1~5점 별점 평가 후 동행 온도(신뢰도)에 반영</li>
                <li>평가 완료 후 완료 다이얼로그 표시 및 프로필 갱신</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름</div>
              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>내 프로필 → 동행 목록 탭 진입</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>종료된 동행 선택 → 동행인 목록 화면</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>동행인 탭 → 별점 평가 다이얼로그</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div></div>
                  <div className={styles.flowText}>평가 제출 → 완료 다이얼로그 + 프로필 온도 갱신</div>
                </div>
              </div>

              <div className={styles.featureLabel}>주요 화면</div>
              <div className={styles.screenshotRow}>
                <div className={styles.screenshotItem}>
                  <img src="/images/ondo1.png" alt="동행 평가 화면" />
                  <div className={styles.scLabel}>동행 평가</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/ondo2.png" alt="별점 다이얼로그" />
                  <div className={styles.scLabel}>별점 평가</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/ondo3.png" alt="완료 다이얼로그" />
                  <div className={styles.scLabel}>평가 완료</div>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>Riverpod으로 멤버별 평가 상태 개별 관리</li>
                  <li>별점 평가 결과를 동행 온도에 실시간 반영</li>
                  <li>평가 완료 후 MenuProvider 자동 갱신 처리</li>
                </ul>
              </div>
            </div>

            {/* 7. AR 실내 길찾기 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>AR 실내 길찾기</div>
                  <div className={styles.featureSubtitle}>카메라 인식 기반 실내 AR 네비게이션</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>카메라로 주변 표지판 OCR 인식 → 현재 위치 자동 측위</li>
                <li>목적지 POI 선택 후 경로 탐색 API 호출 → 경유점 배열 수신</li>
                <li>AR 공간에 3D 화살표 모델(GLB) 배치하여 이동 방향 안내</li>
                <li>카메라 포즈 0.5초 주기 추적 → 진행된 경로만큼 화살표 슬라이딩</li>
                <li>위치 인식 모호 시 후보 다이얼로그 표시 / 수동 위치 선택 지원</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름</div>
              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>목적지 선택 → POI 목록 API 호출</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>카메라 ON → 표지판 OCR 인식 → 현재 위치 측위(Localize API)</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>위치 확인 → 경로 탐색(Route API) → 경유점 수신</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div><div className={styles.flowLine}></div></div>
                  <div className={styles.flowText}>AR 뷰에 화살표 렌더링 → 카메라 이동에 따라 경유점 슬라이딩</div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.flowDotCol}><div className={styles.flowDot}></div></div>
                  <div className={styles.flowText}>목적지 도착 → 도착 패널 표시</div>
                </div>
              </div>

              <div className={styles.featureLabel}>주요 화면</div>
              <div className={styles.screenshotRow}>
                <div className={styles.screenshotItem}>
                  <img src="/images/ar1.jpg" alt="목적지 선택" />
                  <div className={styles.scLabel}>목적지 선택</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/ar2.jpg" alt="현위치 인식" />
                  <div className={styles.scLabel}>현위치 인식</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/ar.png" alt="AR 길찾기" />
                  <div className={styles.scLabel}>AR 길안내</div>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>AR 좌표계(x,z)와 실내 지도 좌표계(x,y) 변환 매핑</li>
                  <li>카메라 Yaw 각도 기반 화살표 방향 보정 및 앵커 재설정</li>
                  <li>OCR 결과 모호 시 후보 다이얼로그 → 수동 위치 선택 폴백 처리</li>
                  <li>Riverpod IndoorArNotifier로 측위·경로·POI 상태 통합 관리</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 트러블슈팅 */}
          <section className={styles.section}>
            <h2>트러블슈팅</h2>

            {/* 1. 네이버 로그인 + Deep Link */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>로그인</span>
                <span className={styles.troubleTitle}>OAuth 콜백 구조 변경 — 토큰·신규 유저 정보 미수신</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>초기 구현은 OAuth 표준 방식(인가 코드)으로 Deep Link를 수신했으나, 백엔드가 서버 사이드에서 토큰 교환까지 처리 후 accessToken·isNewUser를 Deep Link로 직접 내려주는 구조로 변경되어 앱이 콜백 파라미터를 받지 못함</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>Deep Link 핸들러가 code·state만 파싱하도록 되어 있어, 백엔드 변경 후 accessToken / isNewUser 파라미터를 인식하지 못함</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>Deep Link 핸들러를 토큰 직접 수신 방식으로 수정하고, isNewUser 문자열을 Boolean으로 파싱해 AuthState에 저장 → Go Router가 신규/기존 유저를 분기 처리</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>OAuth 콜백 구조는 초기 설계 단계에서 명확히 합의해야 하며, 백엔드 구조 변경 시 앱 측 핸들러도 함께 업데이트해야 함</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.cm}>{'// OAuth 인가 코드 방식'}</span>{'\n'}
                      <span className={styles.cm}>{'// callback?code=xxx&state=xxx'}</span>{'\n'}
                      <span className={styles.kw}>{'final'}</span>{' code =\n  uri.queryParameters['}
                      <span className={styles.str}>{"'code'"}</span>{'];\n'}
                      <span className={styles.kw}>{'final'}</span>{' state =\n  uri.queryParameters['}
                      <span className={styles.str}>{"'state'"}</span>{'];\n\n'}
                      <span className={styles.kw}>{'if'}</span>{' (code != '}
                      <span className={styles.kw}>{'null'}</span>{' && state != '}
                      <span className={styles.kw}>{'null'}</span>{'} {\n  NaverAuthCallback(\n    code: code, state: state);\n}'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.cm}>{'// 토큰 직접 수신 방식'}</span>{'\n'}
                      <span className={styles.cm}>{'// callback?accessToken=xxx&isNewUser=true'}</span>{'\n'}
                      <span className={styles.kw}>{'final'}</span>{' accessToken =\n  uri.queryParameters['}
                      <span className={styles.str}>{"'accessToken'"}</span>{'];\n'}
                      <span className={styles.kw}>{'final'}</span>{' isNewUserStr =\n  uri.queryParameters['}
                      <span className={styles.str}>{"'isNewUser'"}</span>{'];\n'}
                      <span className={styles.kw}>{'bool'}</span>{'? isNewUser;\n'}
                      <span className={styles.kw}>{'if'}</span>{' (isNewUserStr != '}
                      <span className={styles.kw}>{'null'}</span>{'} {\n  isNewUser = isNewUserStr\n    .toLowerCase() == '}
                      <span className={styles.str}>{"'true'"}</span>{';\n}'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 신규/기존 유저 분기 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>로그인</span>
                <span className={styles.troubleTitle}>신규 유저와 기존 유저 화면 분기 오류</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>신규 유저임에도 메인 화면으로 바로 이동하거나, 기존 유저가 매번 프로필 설정으로 이동</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>isNewUser 값이 AuthState에 전달되지 않아 Go Router의 redirect 분기 조건이 항상 동일하게 평가됨</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>isNewUser를 Boolean으로 파싱해 AuthState에 저장하고, Go Router redirect에서 isNewUser·signupCompleted 값을 조합해 분기 처리</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>인증 상태값이 라우팅 로직과 직결되므로, 상태 모델 변경 시 라우터 분기 조건도 함께 검토해야 함</span>
              </div>
            </div>

            {/* 3. 토스페이먼츠 연동 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>더치페이</span>
                <span className={styles.troubleTitle}>토스페이먼츠 WebView 결제 결과 처리 — 임시 버튼 의존</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>WebView 내 결제 완료 후 성공/실패 결과를 Flutter로 전달받지 못해, '테스트 완료' 버튼을 임시로 두고 수동 처리하는 상태였음</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>결제 후 successUrl로 리다이렉트될 때 WebView가 URL을 그대로 열려 해서, 앱 커스텀 스킴을 Flutter에서 가로채지 못함</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>navigationDelegate에서 ballballball:// 스킴 URL을 감지해 NavigationDecision.prevent 반환, 결제 파라미터를 파싱해 백엔드 confirm API 호출 후 상태 업데이트</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>WebView와 네이티브 앱 간 통신 방식은 외부 SDK 연동 전 사전에 설계해야 함</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.cm}>{"// 임시 '테스트 완료' 버튼"}</span>{'\n'}
                      {'actions: [\n  TextButton(\n    onPressed: _handleTestComplete,\n    child: Text('}
                      <span className={styles.str}>{"'테스트 완료'"}</span>{'),\n  ),\n],'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.cm}>{'// ballballball:// 스킴 가로채기'}</span>{'\n'}
                      {'NavigationDecision _handleNavigation(\n    NavigationRequest req) {\n  '}
                      <span className={styles.kw}>{'if'}</span>{' (req.url.startsWith(\n      _successScheme)) {\n    _handleSuccess(\n      Uri.parse(req.url));\n    '}
                      <span className={styles.kw}>{'return'}</span>{' NavigationDecision.prevent;\n  }\n  '}
                      <span className={styles.kw}>{'return'}</span>{' NavigationDecision.navigate;\n}'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. 리액션 토글 상태 미유지 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>커뮤니티</span>
                <span className={styles.troubleTitle}>리액션 토글 후 화면 이탈 시 선택 상태 초기화</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>리액션을 변경해도 목록으로 돌아오거나 새로고침되면 토글 상태가 원래대로 돌아감</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>Provider에 keepAlive가 없어 화면 이탈 시 소멸되고, 목록 갱신 시 서버 원본 데이터가 로컬 토글을 덮어씌움</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>@Riverpod(keepAlive: true)로 Provider를 유지하고, 목록 갱신 시 _applyOverridesToPosts()로 로컬 override를 서버 데이터에 합성</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>낙관적 업데이트 적용 시 서버 데이터 재조회 때 로컬 상태를 merge하는 로직을 반드시 함께 설계해야 함</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.cm}>{'// keepAlive 없음'}</span>{'\n'}
                      <span className={styles.hl}>{'@riverpod'}</span>{'\n'}
                      <span className={styles.kw}>{'class'}</span>{' '}
                      <span className={styles.fn}>{'CommunityReactionOverrides'}</span>{'\n  '}
                      <span className={styles.kw}>{'extends'}</span>{' _$CommunityReactionOverrides {\n  '}
                      <span className={styles.kw}>{'@override'}</span>{'\n  Map<'}
                      <span className={styles.kw}>{'int'}</span>{', CommunityReactionEntity>\n      build() => {};\n}\n\n'}
                      {'state = state.copyWith(\n  posts: posts,\n);'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.cm}>{'// keepAlive: true'}</span>{'\n'}
                      <span className={styles.hl}>{'@Riverpod(keepAlive: true)'}</span>{'\n'}
                      <span className={styles.kw}>{'class'}</span>{' '}
                      <span className={styles.fn}>{'CommunityReactionOverrides'}</span>{'\n  '}
                      <span className={styles.kw}>{'extends'}</span>{' _$CommunityReactionOverrides {\n  '}
                      <span className={styles.kw}>{'@override'}</span>{'\n  Map<'}
                      <span className={styles.kw}>{'int'}</span>{', CommunityReactionEntity>\n      build() => {};\n}\n\n'}
                      <span className={styles.kw}>{'final'}</span>{' effectivePosts =\n  _applyOverridesToPosts(posts);\nstate = state.copyWith(\n  posts: effectivePosts,\n);'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. 로그아웃 후 API 요청 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>인증</span>
                <span className={styles.troubleTitle}>로그아웃 후 서버 세션 미삭제 — FCM 알림 지속 수신</span>
              </div>
              <div className={styles.troubleBody}>
                <div className={styles.troubleLeft}>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                    <span className={styles.troubleText}>로그아웃 후에도 FCM 알림이 계속 수신되고 서버 세션이 유지됨</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                    <span className={styles.troubleText}>AuthNotifier에 logout() 메서드가 없어 로컬 토큰만 삭제되고, 백엔드 로그아웃 API와 FCM 토큰 해제가 호출되지 않음</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                    <span className={styles.troubleText}>logout() 메서드 추가 — 서버 /logout API 호출 후 FCM·로컬 토큰 순차 삭제, API 실패 시에도 로컬은 항상 초기화</span>
                  </div>
                  <div className={styles.troubleRow}>
                    <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                    <span className={styles.troubleText}>로그아웃은 로컬 상태 초기화가 아닌 서버 세션·FCM·토큰을 포함하는 복합 작업이며, 인증 동작은 AuthNotifier 한 곳에 집중시켜야 함</span>
                  </div>
                </div>
                <div className={styles.troubleRight}>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                    <pre>
                      <span className={styles.cm}>{'// 로컬만 삭제, API 호출 없음'}</span>{'\n'}
                      <span className={styles.kw}>{'await'}</span>{' ref\n  .read(authNotifierProvider\n    .notifier)\n  .clear();'}
                    </pre>
                  </div>
                  <div className={styles.codeBlock}>
                    <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                    <pre>
                      <span className={styles.cm}>{'// API 호출 → FCM + 토큰 삭제'}</span>{'\n'}
                      <span className={styles.kw}>{'Future'}</span>{'<'}
                      <span className={styles.kw}>{'void'}</span>{'> '}
                      <span className={styles.fn}>{'logout'}</span>{'() '}
                      <span className={styles.kw}>{'async'}</span>{' {\n  '}
                      <span className={styles.kw}>{'try'}</span>{' {\n    '}
                      <span className={styles.kw}>{'await'}</span>{' dio.post(\n      '}
                      <span className={styles.str}>{"'/api/v1/logout'"}</span>{');\n  } '}
                      <span className={styles.kw}>{'catch'}</span>{' (_) {}\n  '}
                      <span className={styles.kw}>{'await'}</span>{' '}
                      <span className={styles.fn}>{'clear'}</span>{'();\n}'}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 프론트엔드 성능 최적화 */}
          <section className={styles.section}>
            <h2>프론트엔드 성능 최적화 및 컴포넌트 설계</h2>

            <div className={styles.featureLabel}>Widget Rebuild 최소화</div>
            <ul className={styles.perfList}>
              <li><strong>const 생성자</strong>: 정적 위젯의 불필요한 rebuild 방지</li>
              <li><strong>ref.watch(provider.select())</strong>: 구독 필드 변경 시에만 rebuild 트리거</li>
              <li><strong>RepaintBoundary</strong>: 리액션 통계 위젯 리페인트 영역 격리</li>
            </ul>

            <div className={styles.featureLabel}>리스트 렌더링 최적화</div>
            <ul className={styles.perfList}>
              <li><strong>ListView.builder</strong>: 화면에 보이는 아이템만 빌드</li>
              <li><strong>CachedNetworkImage</strong>: 이미지 캐시로 재요청 제거 및 깜빡임 방지</li>
              <li><strong>무한 스크롤 페이지네이션</strong>: 필요한 만큼만 로드해 초기 응답 속도 개선</li>
            </ul>

            <div className={styles.featureLabel}>공통 컴포넌트 설계</div>
            <p style={{ fontSize: '0.85em', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              중복되던 버튼·입력창·앱바를 <strong>shared/widgets</strong>로 분리해 디자인 변경 시 한 곳만 수정하면 전체에 반영되도록 했습니다.
            </p>
            <div className={styles.componentGrid}>
              <div className={styles.componentCard}>
                <div className={styles.compName}>Button</div>
                <div className={styles.compDesc}>PrimaryButton · OutlineButton · TextOnlyButton</div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>TextField</div>
                <div className={styles.compDesc}>CustomTextField · PasswordTextField · FloatingLabelTextField</div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>AppBar</div>
                <div className={styles.compDesc}>CustomAppBar · SearchAppBar · TabbedAppBar · TransparentAppBar</div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>Navigation</div>
                <div className={styles.compDesc}>MainNavigationBar — 하단 탭 전환 단일 컴포넌트</div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>TripleShuffleCarousel</div>
                <div className={styles.compDesc}>중앙 카드 강조 + 무한 루프 자동 슬라이드</div>
              </div>
            </div>
          </section>

          {/* 아키텍처 */}
          <section className={styles.section}>
            <h2>아키텍처</h2>

            <div className={styles.featureLabel}>Clean Architecture</div>
            <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '16px' }}>
              화면·비즈니스 로직·API 호출의 관심사를 분리해 각 레이어가 독립적으로 변경될 수 있도록
              Data / Domain / Presentation 3계층 구조를 적용했습니다.
            </p>

            <div className={styles.archTree}>
              {'feature/\n'}
              {'├── data/\n'}
              {'│   ├── '}<span className={styles.folder}>data_source/</span>{'   '}<span className={styles.comment}># Dio로 API 호출 (interface + impl)</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>dto/</span>{'           '}<span className={styles.comment}># JSON 파싱 (freezed + json_serializable)</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>mapper/</span>{'        '}<span className={styles.comment}># DTO → Entity 변환</span>{'\n'}
              {'│   └── '}<span className={styles.folder}>repository/</span>{'    '}<span className={styles.comment}># Repository 구현체</span>{'\n'}
              {'├── domain/\n'}
              {'│   ├── '}<span className={styles.folder}>entity/</span>{'        '}<span className={styles.comment}># 비즈니스 모델</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>repository/</span>{'    '}<span className={styles.comment}># Repository 인터페이스</span>{'\n'}
              {'│   └── '}<span className={styles.folder}>usecase/</span>{'       '}<span className={styles.comment}># 단일 책임 유스케이스</span>{'\n'}
              {'└── presentation/\n'}
              {'    ├── '}<span className={styles.folder}>provider/</span>{'      '}<span className={styles.comment}># Riverpod Notifier + State</span>{'\n'}
              {'    ├── '}<span className={styles.folder}>screen/</span>{'        '}<span className={styles.comment}># UI 화면</span>{'\n'}
              {'    └── '}<span className={styles.folder}>widgets/</span>{'       '}<span className={styles.comment}># 재사용 위젯</span>
            </div>

            <div className={styles.featureLabel}>적용 후 좋았던 점</div>
            <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', lineHeight: '1.85', marginTop: '8px' }}>
              서버 응답 필드명이 바뀌었을 때 DTO와 Mapper만 수정하면 됐고 화면 코드는 건드릴 필요가 없었습니다.
              반대로 UI가 바뀌어도 data 레이어는 영향받지 않았고, 기능이 늘어날수록 각 레이어 역할이 명확해서
              어디를 고쳐야 할지 바로 찾을 수 있었습니다.
            </p>
          </section>

          {/* 마치며 */}
          <section className={styles.section}>
            <h2>마치며</h2>

            <div className={styles.resultCard}>
              <h4>로그아웃은 생각보다 복잡</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                로컬 토큰 삭제만으로 끝이라고 생각했는데, 서버 세션·FCM 토큰 해제까지 포함하는 복합 작업이었습니다.
                인증 관련 동작은 AuthNotifier 한 곳에 모아야 한다는 것을 이 과정에서 배웠습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>WebView 연동은 통신 방식부터 설계</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                토스페이먼츠 WebView에서 결제 결과를 앱으로 전달하는 방법을 처음에 설계하지 않아서
                임시 버튼으로 때우는 상태가 됐습니다. 커스텀 URL 스킴으로 콜백을 가로채는 방식으로 해결했고,
                외부 SDK 연동 전에 통신 흐름을 먼저 정해야 한다는 것을 실감했습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>낙관적 업데이트는 롤백까지 설계</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                리액션 토글을 서버 응답 전에 UI에 먼저 반영했는데, 목록이 새로고침되면 상태가 원래대로 돌아가는 문제가 있었습니다.
                keepAlive와 override 합성 로직을 추가해서 해결했고, 낙관적 업데이트는 서버 데이터 재조회 시의 merge 전략도 함께 고려해야 한다는 것을 배웠습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>프론트-백 협업, 초기 스펙 합의</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                OAuth 콜백 구조가 중간에 바뀌면서 Deep Link 핸들러를 전면 수정했습니다.
                Swagger 기반으로 API를 협의했지만, 인증처럼 흐름이 복잡한 부분은 텍스트 스펙만으로는 부족하고 시퀀스 다이어그램 수준의 합의가 필요하다고 느꼈습니다.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
