import styled from "styled-components";

export const ContactStyled = styled.section`
  padding: 8rem 5%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);

  .contact-header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 800;
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 5px;
        background: var(--gradient-secondary);
        border-radius: 10px;
      }
    }

    .subtitle {
      font-size: 1.3rem;
      color: var(--text-secondary);
      margin-top: 2rem;
      font-weight: 500;
    }
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .contact-info-section {
    .info-header {
      margin-bottom: 2.5rem;

      h3 {
        font-size: 1.8rem;
        color: var(--text-primary);
        margin-bottom: 0.8rem;
        font-weight: 700;
      }

      p {
        color: var(--text-muted);
        font-size: 1.05rem;
      }
    }

    .contact-cards {
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.8rem 2rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      text-decoration: none;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
        transition: left 0.5s;
      }

      &:hover {
        border-color: var(--primary-color);
        box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
        transform: translateX(5px);

        &::before {
          left: 100%;
        }

        .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
      }

      .icon-wrapper {
        min-width: 60px;
        height: 60px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        transition: transform 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

        .icon {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }
      }

      .card-content {
        flex: 1;

        h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          font-weight: 600;
        }

        p {
          font-size: 1rem;
          color: var(--text-muted);
          font-weight: 400;
        }
      }
    }

    .social-connect {
      text-align: center;
      padding: 2rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px;

      p {
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        font-size: 1.05rem;
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          transition: all 0.3s ease;
          color: var(--text-secondary);

          svg {
            width: 24px;
            height: 24px;
          }

          &:hover {
            transform: translateY(-5px) scale(1.1);
            border-color: var(--primary-color);
            box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
          }

          &.linkedin:hover {
            background: #0077b5;
            color: white;
          }

          &.github:hover {
            background: #333;
            color: white;
          }

          &.leetcode:hover {
            background: #FFA116;
            color: white;
          }
        }
      }
    }
  }

  .contact-form-section {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 3rem 2.5rem;
    box-shadow: var(--shadow-lg);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    .form-header {
      margin-bottom: 2rem;

      h3 {
        font-size: 1.8rem;
        color: var(--text-primary);
        margin-bottom: 0.8rem;
        font-weight: 700;
      }

      p {
        color: var(--text-muted);
        font-size: 1.05rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 3%;

    .contact-header {
      margin-bottom: 3rem;

      .subtitle {
        font-size: 1.1rem;
      }
    }

    .contact-card {
      padding: 1.5rem;

      .icon-wrapper {
        min-width: 50px;
        height: 50px;
        font-size: 1.5rem;
      }
    }

    .contact-form-section {
      padding: 2rem 1.5rem;
    }
  }
`;