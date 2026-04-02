import { useNavigate } from 'react-router-dom'
import styles from './BallBallBallDetail.module.css'

export default function BallBallBallDetail() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
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

          {/* Overview 개인 서술 */}
          <section className={styles.section}>
            <h2>Overview</h2>
            <p style={{ fontSize: '0.95em', color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '16px' }}>
              야구장에 같이 갈 사람을 구하는 방법이 생각보다 번거롭다는 걸 팀원들과 이야기하다가 시작된 프로젝트입니다.
              오픈채팅방을 뒤지거나 커뮤니티 글을 올리는 게 아니라, 야구 앱 안에서 바로 동행을 구하고 더치페이까지 할 수 있으면 어떨까 했습니다.
            </p>
            <p style={{ fontSize: '0.95em', color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '16px' }}>
              저는 <strong style={{ color: 'var(--primary-100)' }}>로그인, 커뮤니티, 프로필, 더치페이</strong> 파트를 담당했습니다.
              OAuth 소셜 로그인부터 토스페이먼츠 실결제 연동까지, 사용자가 앱에 처음 들어오는 순간부터 결제를 완료하는 순간까지의 흐름을 직접 구현했습니다.
            </p>
            <p style={{ fontSize: '0.95em', color: 'var(--text-secondary)', lineHeight: '1.85' }}>
              기능 하나하나보다 <strong>사용자 흐름이 자연스럽게 이어지는 것</strong>에 집중했고,
              그 과정에서 WebView 딥링크 콜백, Riverpod 상태 생명주기, 낙관적 업데이트 롤백 같은 문제들을 실제로 만나고 해결했습니다.
            </p>
          </section>

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

            <div className={styles.techSectionTitle}>Backend (협업)</div>
            <div className={styles.techTags}>
              <span className={`${styles.techTag} ${styles.backend}`}>Spring Boot 3.5</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Java 17</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Apache Maven</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Spring Data JPA</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Hibernate 6</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Spring Security</span>
              <span className={`${styles.techTag} ${styles.backend}`}>JWT 0.13.0</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Springdoc OpenAPI 2.6.0</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Kafka</span>
            </div>

            <div className={styles.techSectionTitle}>AI 추천 서비스 (협업)</div>
            <div className={styles.techTags}>
              <span className={styles.techTag} style={{ background: 'var(--warning-light)', color: 'var(--warning)', borderColor: '#f9a8b0' }}>Flask</span>
              <span className={styles.techTag} style={{ background: 'var(--warning-light)', color: 'var(--warning)', borderColor: '#f9a8b0' }}>Python 3.12.3</span>
              <span className={styles.techTag} style={{ background: 'var(--warning-light)', color: 'var(--warning)', borderColor: '#f9a8b0' }}>LightGBM</span>
              <span className={styles.techTag} style={{ background: 'var(--warning-light)', color: 'var(--warning)', borderColor: '#f9a8b0' }}>pgvector</span>
              <span className={styles.techTag} style={{ background: 'var(--warning-light)', color: 'var(--warning)', borderColor: '#f9a8b0' }}>OpenAI Embedding</span>
            </div>

            <div className={styles.techSectionTitle}>인프라</div>
            <div className={styles.techTags}>
              <span className={`${styles.techTag} ${styles.infra}`}>Docker</span>
              <span className={`${styles.techTag} ${styles.infra}`}>Docker Compose</span>
              <span className={`${styles.techTag} ${styles.infra}`}>Jenkins</span>
              <span className={`${styles.techTag} ${styles.infra}`}>PostgreSQL 15</span>
              <span className={`${styles.techTag} ${styles.infra}`}>Redis 7</span>
              <span className={`${styles.techTag} ${styles.infra}`}>AWS EC2</span>
              <span className={`${styles.techTag} ${styles.infra}`}>AWS RDS</span>
              <span className={`${styles.techTag} ${styles.infra}`}>AWS S3</span>
            </div>
          </section>

          {/* 담당 기능 상세 */}
          <section className={styles.section}>
            <h2>담당 기능 <span className={styles.badge}>6개</span></h2>

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
                  <img src="/images/dutchpay9.png" alt="상태별 목록" />
                  <div className={styles.scLabel}>상태별 목록</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay1.png" alt="인원선택" />
                  <div className={styles.scLabel}>인원선택</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay2.png" alt="금액입력" />
                  <div className={styles.scLabel}>금액입력</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay3.png" alt="더치페이 생성" />
                  <div className={styles.scLabel}>더치페이 생성</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay4.png" alt="더치페이 생성 요청알림" />
                  <div className={styles.scLabel}>더치페이 생성 요청알림</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay5.png" alt="상세" />
                  <div className={styles.scLabel}>상세</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay6.png" alt="결제 화면" />
                  <div className={styles.scLabel}>결제</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay7.png" alt="결제" />
                  <div className={styles.scLabel}>결제</div>
                </div>
                <div className={styles.screenshotItem}>
                  <img src="/images/dutchpay8.png" alt="결제 완료" />
                  <div className={styles.scLabel}>결제완료</div>
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
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>초기 구현은 OAuth 표준 방식(인가 코드)으로 Deep Link를 수신했으나, 백엔드가 서버 사이드에서 토큰 교환까지 처리 후 accessToken·isNewUser를 Deep Link로 직접 내려주는 구조로 변경되어 앱이 콜백 파라미터를 받지 못함</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>Deep Link 핸들러가 code·state만 파싱하도록 되어 있어, 백엔드가 변경된 후 accessToken / refreshToken / isNewUser / signupCompleted 파라미터를 인식하지 못함</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>Deep Link 핸들러를 토큰 직접 수신 방식으로 수정하고, isNewUser 문자열을 Boolean으로 파싱해 AuthState에 저장 → Go Router가 신규/기존 유저를 분기 처리</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>프론트-백엔드 간 OAuth 콜백 구조는 초기 설계 단계에서 명확히 합의해야 하며, 백엔드 구조 변경 시 앱 측 핸들러도 함께 업데이트해야 함</span>
              </div>
              <div className={styles.codeCompare}>
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

            {/* 2. 신규/기존 유저 분기 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>로그인</span>
                <span className={styles.troubleTitle}>신규 유저와 기존 유저 화면 분기 오류</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>신규 유저임에도 프로필 설정 화면이 아닌 메인 화면으로 바로 이동하거나, 반대로 기존 유저가 매번 프로필 설정으로 이동</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>Deep Link 콜백 파라미터 구조 변경(위 이슈) 이후 isNewUser 값이 AuthState에 전달되지 않아 Go Router의 redirect 분기 조건이 항상 동일하게 평가됨</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>isNewUser를 Boolean으로 파싱해 AuthState에 저장하고, Go Router redirect에서 isNewUser·signupCompleted 값을 조합해 프로필 설정 / 메인 화면 분기 처리</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>인증 상태값이 라우팅 로직과 직결되어 있으므로, 상태 모델 변경 시 라우터 분기 조건도 함께 검토하는 습관이 필요</span>
              </div>
            </div>

            {/* 3. 토스페이먼츠 연동 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>더치페이</span>
                <span className={styles.troubleTitle}>토스페이먼츠 WebView 결제 결과 처리 — 임시 버튼 의존</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>WebView 내 결제 완료 후 성공/실패 결과를 Flutter로 전달받지 못해, AppBar에 '테스트 완료' 버튼을 임시로 두고 수동으로 완료 처리하는 상태였음</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>토스페이먼츠 결제 후 successUrl·failUrl로 리다이렉트될 때 WebView가 해당 URL을 그대로 열려 해서, 앱 커스텀 스킴(ballballball://payment/...)을 Flutter에서 가로채지 못함</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>WebViewController의 navigationDelegate에서 ballballball:// 스킴 URL을 감지해 NavigationDecision.prevent 반환, Flutter 측에서 결제 파라미터를 파싱해 백엔드 confirm API를 호출하고 더치페이 상태 업데이트</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>WebView와 네이티브 앱 간 통신 방식(커스텀 URL 스킴, JavascriptChannel 등)은 외부 SDK 연동 전 사전에 설계해야 하며, 임시 코드가 실제 릴리즈에 포함되지 않도록 주의가 필요</span>
              </div>
              <div className={styles.codeCompare}>
                <div className={styles.codeBlock}>
                  <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                  <pre>
                    <span className={styles.cm}>{"// 임시 '테스트 완료' 버튼으로 결제 처리"}</span>{'\n'}
                    {'actions: [\n  TextButton(\n    onPressed: _handleTestComplete,\n    child: Text('}
                    <span className={styles.str}>{"'테스트 완료'"}</span>{'),\n  ),\n],\n\n'}
                    <span className={styles.kw}>{'void'}</span>{' _handleTestComplete() {\n  ScaffoldMessenger.of(context)\n    .showSnackBar(SnackBar(\n      content: Text('}
                    <span className={styles.str}>{"'결제 완료! (테스트)'"}</span>{')));\n  Navigator.of(context).pop('}
                    <span className={styles.kw}>{'true'}</span>{');\n}'}
                  </pre>
                </div>
                <div className={styles.codeBlock}>
                  <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                  <pre>
                    <span className={styles.cm}>{'// navigationDelegate로 콜백 URL 감지'}</span>{'\n'}
                    {'_webController =\n  WebViewController()\n  ..setJavaScriptMode(\n    JavaScriptMode.unrestricted)\n  ..setNavigationDelegate(\n    NavigationDelegate(\n      onNavigationRequest:\n        _handleNavigation))\n  ..loadHtmlString(html);\n\n'}
                    <span className={styles.cm}>{'// ballballball:// 스킴 가로채기'}</span>{'\n'}
                    {'NavigationDecision _handleNavigation(\n    NavigationRequest req) {\n  '}
                    <span className={styles.kw}>{'if'}</span>{' (req.url.startsWith(_successScheme)) {\n    _handleSuccess(Uri.parse(req.url));\n    '}
                    <span className={styles.kw}>{'return'}</span>{' NavigationDecision.prevent;\n  }\n  '}
                    <span className={styles.kw}>{'return'}</span>{' NavigationDecision.navigate;\n}'}
                  </pre>
                </div>
              </div>
            </div>

            {/* 4. 리액션 토글 상태 미유지 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>커뮤니티</span>
                <span className={styles.troubleTitle}>리액션 토글 후 화면 이탈 시 선택 상태 초기화</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>리액션 버튼을 눌러 선택 상태를 바꿔도, 게시글 상세에서 목록으로 돌아오거나 목록이 새로고침되면 토글 상태가 원래대로 돌아감</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>로컬 리액션 상태를 담는 CommunityReactionOverrides Provider에 keepAlive가 없어 화면 이탈 시 소멸되고, 목록 갱신 시에도 _applyOverridesToPosts() 없이 서버 원본 데이터를 그대로 사용해 로컬 토글이 덮어씌워짐</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>@Riverpod(keepAlive: true)로 앱 생애주기 동안 Provider를 유지하고, 목록 갱신 시 _applyOverridesToPosts()로 로컬 override를 서버 데이터에 합성해 UI와 실제 상태를 항상 일치시킴</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>낙관적 업데이트(optimistic update)를 적용할 때는 서버 데이터 재조회 시 로컬 상태를 merge하는 로직을 반드시 함께 설계해야 하며, Provider의 생명주기도 UX 관점에서 의도적으로 제어해야 함</span>
              </div>
              <div className={styles.codeCompare}>
                <div className={styles.codeBlock}>
                  <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                  <pre>
                    <span className={styles.cm}>{'// keepAlive 없음 — 화면 이탈 시 Provider 소멸'}</span>{'\n'}
                    <span className={styles.hl}>{'@riverpod'}</span>{'\n'}
                    <span className={styles.kw}>{'class'}</span>{' '}
                    <span className={styles.fn}>{'CommunityReactionOverrides'}</span>{'\n  '}
                    <span className={styles.kw}>{'extends'}</span>{' _$CommunityReactionOverrides {\n  '}
                    <span className={styles.kw}>{'@override'}</span>{'\n  Map<'}
                    <span className={styles.kw}>{'int'}</span>{', CommunityReactionEntity>\n      build() => {};\n}\n\n'}
                    <span className={styles.cm}>{'// 게시글 목록 갱신 시 override 미적용'}</span>{'\n'}
                    {'state = state.copyWith(\n  posts: posts,  '}
                    <span className={styles.cm}>{'// raw 서버 데이터'}</span>{'\n);'}
                  </pre>
                </div>
                <div className={styles.codeBlock}>
                  <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                  <pre>
                    <span className={styles.cm}>{'// keepAlive — 앱 생애주기 동안 상태 유지'}</span>{'\n'}
                    <span className={styles.hl}>{'@Riverpod(keepAlive: true)'}</span>{'\n'}
                    <span className={styles.kw}>{'class'}</span>{' '}
                    <span className={styles.fn}>{'CommunityReactionOverrides'}</span>{'\n  '}
                    <span className={styles.kw}>{'extends'}</span>{' _$CommunityReactionOverrides {\n  '}
                    <span className={styles.kw}>{'@override'}</span>{'\n  Map<'}
                    <span className={styles.kw}>{'int'}</span>{', CommunityReactionEntity>\n      build() => {};\n}\n\n'}
                    <span className={styles.cm}>{'// 목록 갱신 시 로컬 override 합성'}</span>{'\n'}
                    <span className={styles.kw}>{'final'}</span>{' effectivePosts =\n  _applyOverridesToPosts(posts);\nstate = state.copyWith(\n  posts: effectivePosts,\n);'}
                  </pre>
                </div>
              </div>
            </div>

            {/* 5. 로그아웃 후 API 요청 */}
            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>인증</span>
                <span className={styles.troubleTitle}>로그아웃 후 서버 세션 미삭제 — FCM 알림 지속 수신</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>로그아웃 후에도 FCM 푸시 알림이 계속 수신되고, 서버 세션이 유지된 채로 남아 보안상 문제 발생</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>AuthNotifier에 logout() 메서드가 없어 메뉴 화면에서 clear()만 직접 호출 — 로컬 토큰은 삭제되지만 백엔드 로그아웃 API가 호출되지 않아 서버 세션과 FCM 토큰이 그대로 유지됨</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>auth_provider에 logout() 메서드 추가 — 백엔드 /api/v1/logout 호출 후 FCM 토큰·로컬 토큰 삭제 순서 보장. API 실패 시에도 로컬은 항상 초기화되도록 try-catch로 처리</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>로그아웃은 단순한 로컬 상태 초기화가 아닌 서버 세션 만료, FCM 토큰 해제, 로컬 토큰 삭제를 포함하는 복합 작업이며, 인증 관련 동작은 AuthNotifier 한 곳에 집중시켜야 함</span>
              </div>
              <div className={styles.codeCompare}>
                <div className={styles.codeBlock}>
                  <div className={`${styles.codeBlockHeader} ${styles.before}`}>✕ Before</div>
                  <pre>
                    <span className={styles.cm}>{'// auth_provider에 logout() 없음'}</span>{'\n'}
                    <span className={styles.cm}>{'// 메뉴 화면에서 직접 clear() 호출'}</span>{'\n'}
                    <span className={styles.kw}>{'await'}</span>{' ref\n  .read(authNotifierProvider.notifier)\n  .clear(); '}
                    <span className={styles.cm}>{'// API 호출 없이 로컬만 삭제'}</span>{'\n\n'}
                    <span className={styles.cm}>{'// → 서버 세션·FCM 토큰 미삭제'}</span>{'\n'}
                    <span className={styles.cm}>{'// → 로그아웃 후에도 push 알림 수신'}</span>
                  </pre>
                </div>
                <div className={styles.codeBlock}>
                  <div className={`${styles.codeBlockHeader} ${styles.after}`}>✓ After</div>
                  <pre>
                    <span className={styles.cm}>{'// auth_provider에 logout() 추가'}</span>{'\n'}
                    <span className={styles.cm}>{'// API 호출 → FCM + 토큰 삭제 순서 보장'}</span>{'\n'}
                    <span className={styles.kw}>{'Future'}</span>{'<'}
                    <span className={styles.kw}>{'void'}</span>{'> '}
                    <span className={styles.fn}>{'logout'}</span>{'() '}
                    <span className={styles.kw}>{'async'}</span>{' {\n  '}
                    <span className={styles.kw}>{'try'}</span>{' {\n    '}
                    <span className={styles.kw}>{'final'}</span>{' dio = ref.read(dioProvider);\n    '}
                    <span className={styles.kw}>{'await'}</span>{' dio.post(\n      '}
                    <span className={styles.str}>{"'/api/v1/logout'"}</span>{');\n  } '}
                    <span className={styles.kw}>{'catch'}</span>{' (_) {}\n  '}
                    <span className={styles.kw}>{'await'}</span>{' '}
                    <span className={styles.fn}>{'clear'}</span>{'(); '}
                    <span className={styles.cm}>{'// FCM + token'}</span>{'\n}'}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* 프론트엔드 성능 최적화 */}
          <section className={styles.section}>
            <h2>프론트엔드 성능 최적화 및 컴포넌트 설계</h2>

            <div className={styles.perfSubTitle}>Widget Rebuild 최소화</div>
            <p style={{ fontSize: '0.85em', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '10px' }}>
              Flutter는 상태 변경 시 위젯 트리를 재빌드하므로, 불필요한 rebuild 범위를 줄이는 것이 성능의 핵심입니다.
            </p>
            <table className={styles.perfTable}>
              <thead>
                <tr>
                  <th>기법</th>
                  <th>적용 위치</th>
                  <th>효과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>const</code> 생성자</td>
                  <td>버튼·카드·레이블 등 정적 위젯 전반</td>
                  <td>상태 무관 위젯의 rebuild 완전 방지</td>
                </tr>
                <tr>
                  <td><code>ref.watch(provider.select())</code></td>
                  <td>게시글 목록 아이템</td>
                  <td>구독 필드 변경 시에만 rebuild 트리거</td>
                </tr>
                <tr>
                  <td><code>RepaintBoundary</code></td>
                  <td>이모지 리액션 통계 위젯</td>
                  <td>해당 영역만 리페인트 격리</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.perfSubTitle}>리스트 렌더링 최적화</div>
            <ul className={styles.perfList}>
              <li><strong>ListView.builder 적용</strong>: 커뮤니티 게시글 목록에 적용 → 화면에 보이는 아이템만 빌드되어 초기 렌더링 시간 단축</li>
              <li><strong>CachedNetworkImage 활용</strong>: 프로필 이미지·게시글 첨부 이미지에 캐시 적용 → 동일 이미지 재요청 제거, 스크롤 시 깜빡임 방지</li>
              <li><strong>무한 스크롤 페이지네이션</strong>: 전체 데이터를 한 번에 불러오지 않고 필요한 만큼만 로드하여 초기 API 응답 속도 개선</li>
            </ul>

            <div className={styles.perfSubTitle}>공통 컴포넌트 설계</div>
            <p style={{ fontSize: '0.85em', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              화면마다 중복되던 버튼·입력창·앱바를 <strong>shared/widgets</strong>로 분리해
              디자인 변경 시 한 곳만 수정하면 전체 화면에 반영되도록 설계했습니다.
              각 위젯은 상태(로딩·비활성·에러)와 스타일 변형을 파라미터로 제어해
              여러 화면에서 그대로 재사용할 수 있습니다.
            </p>
            <div className={styles.componentGrid}>
              <div className={styles.componentCard}>
                <div className={styles.compName}>Button</div>
                <div className={styles.compDesc}>
                  <code>PrimaryButton</code> · <code>OutlineButton</code> · <code>TextOnlyButton</code><br />
                  로딩·비활성·아이콘 상태를 파라미터 하나로 제어
                </div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>TextField</div>
                <div className={styles.compDesc}>
                  <code>CustomTextField</code> · <code>PasswordTextField</code> · <code>FloatingLabelTextField</code><br />
                  유효성 검사·힌트·비밀번호 토글을 공통으로 처리
                </div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>AppBar</div>
                <div className={styles.compDesc}>
                  <code>CustomAppBar</code> · <code>SearchAppBar</code> · <code>TabbedAppBar</code> · <code>TransparentAppBar</code><br />
                  화면 유형에 맞는 4가지 변형으로 일관된 상단 바 제공
                </div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>Navigation</div>
                <div className={styles.compDesc}>
                  <code>MainNavigationBar</code><br />
                  하단 탭 전환을 단일 컴포넌트로 관리
                </div>
              </div>
              <div className={styles.componentCard}>
                <div className={styles.compName}>TripleShuffleCarousel</div>
                <div className={styles.compDesc}>
                  중앙 카드 강조 + 무한 루프 자동 슬라이드<br />
                  홈 추천 섹션에 덱(deck) 스타일 UX 구현
                </div>
              </div>
            </div>
          </section>

          {/* 아키텍처 */}
          <section className={styles.section}>
            <h2>아키텍처</h2>
            <img src="/images/erd.png" alt="ERD" style={{ width: '100%', borderRadius: '16px', marginBottom: '12px' }} />
            <div style={{ fontSize: '0.8em', color: 'var(--text-hint)', textAlign: 'center', marginBottom: '20px' }}>ERD (Entity Relationship Diagram)</div>
            <img src="/images/architecture.png" alt="시스템 아키텍처" style={{ width: '100%', borderRadius: '16px', marginBottom: '20px' }} />
            <div style={{ fontSize: '0.88em', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              프론트엔드 Clean Architecture
            </div>
            <div className={styles.archTree}>
              <span className={styles.folder}>lib/</span>{'\n'}
              {'├── '}<span className={styles.folder}>core/</span>{'                    '}<span className={styles.comment}># 공통 모듈</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>auth/</span>{'                '}<span className={styles.comment}># 인증 상태 관리</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>deeplink/</span>{'            '}<span className={styles.comment}># 딥링크 처리</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>error/</span>{'               '}<span className={styles.comment}># 에러 핸들링</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>providers/</span>{'           '}<span className={styles.comment}># Dio HTTP 클라이언트</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>services/</span>{'            '}<span className={styles.comment}># FCM 서비스</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>theme/</span>{'               '}<span className={styles.comment}># 앱 테마 / 컬러 / 폰트</span>{'\n'}
              {'│   └── '}<span className={styles.folder}>websocket/</span>{'           '}<span className={styles.comment}># WebSocket 연결</span>{'\n'}
              {'│\n'}
              {'├── '}<span className={styles.folder}>features/</span>{'                '}<span className={styles.comment}># 기능별 모듈</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>auth/</span>{'                '}<span className={styles.comment}># 로그인 / 회원가입</span>{'\n'}
              {'│   │   ├── data/            '}<span className={styles.comment}># DTO, DataSource, Mapper</span>{'\n'}
              {'│   │   ├── domain/          '}<span className={styles.comment}># Entity, UseCase</span>{'\n'}
              {'│   │   └── presentation/    '}<span className={styles.comment}># Screen, Provider, Widget</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>dutchpay/</span>{'            '}<span className={styles.comment}># 더치페이</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>community/</span>{'           '}<span className={styles.comment}># 커뮤니티</span>{'\n'}
              {'│   ├── '}<span className={styles.folder}>menu/</span>{'                '}<span className={styles.comment}># 메뉴 / 프로필</span>{'\n'}
              {'│   └── ...\n'}
              {'│\n'}
              {'└── '}<span className={styles.folder}>shared/</span>{'                  '}<span className={styles.comment}># 공용 위젯</span>{'\n'}
              {'    └── '}<span className={styles.folder}>widgets/</span>
            </div>

            <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', lineHeight: '1.85', marginTop: '20px' }}>
              계층을 나눈 게 실제로 도움이 됐던 건 백엔드 API 스펙이 중간에 바뀌었을 때였습니다.
              응답 필드명이 변경됐는데 DTO와 Mapper만 수정하면 됐고, 화면 코드는 전혀 건드릴 필요가 없었어요.
              기능이 많아질수록 이 구조의 이점이 더 느껴졌습니다.
            </p>
          </section>

          {/* 마치며 */}
          <section className={styles.section}>
            <h2>마치며</h2>

            <div className={styles.resultCard}>
              <h4>로그아웃은 생각보다 복잡하다</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                로컬 토큰 삭제만으로 끝이라고 생각했는데, 서버 세션·FCM 토큰 해제까지 포함하는 복합 작업이었습니다.
                인증 관련 동작은 AuthNotifier 한 곳에 모아야 한다는 걸 이 과정에서 배웠어요.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>WebView 연동은 통신 방식부터 설계해야 한다</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                토스페이먼츠 WebView에서 결제 결과를 앱으로 전달하는 방법을 처음에 설계하지 않아서
                임시 버튼으로 때우는 상태가 됐습니다. 커스텀 URL 스킴으로 콜백을 가로채는 방식으로 해결했고,
                외부 SDK 연동 전에 통신 흐름을 먼저 정해야 한다는 걸 실감했습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>낙관적 업데이트는 롤백까지 설계해야 한다</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                리액션 토글을 서버 응답 전에 UI에 먼저 반영했는데, 목록이 새로고침되면 상태가 원래대로 돌아가는 문제가 있었습니다.
                keepAlive와 override 합성 로직을 추가해서 해결했고, 낙관적 업데이트는 서버 데이터 재조회 시의 merge 전략도 함께 고려해야 한다는 걸 배웠습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>프론트-백 협업에서 가장 중요한 건 초기 스펙 합의</h4>
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
