const SCSS_TEMPLATE = `.ticketCard {
  padding: 16px;
  max-width: 320px;
  overflow: hidden;
  &-wrap {
    border-radius: 8px;
  }
  &-main {
    overflow: hidden;
  }
  &-body {
    padding: 16px;
    box-shadow: 0px 16px 8px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px 4px 0 0;
    position: relative;
    border: {
      style: solid;
      width: 2px;
      bottom-width: 0;
      color: transparent !important;
    }
    transition: border-color 0.45s;
    .col-left,
    .col-right,
    .col-center {
      display: flex;
      flex-direction: column;
    }
    .col-right {
      align-items: flex-end;
      text-align: right;
    }
    .col-center {
      align-items: center;
    }
    .bus {
      &-statsion,
      &-obj {
        position: absolute;
        bottom: -15px;
        z-index: 200;
        line-height: 0;
      }
      &-obj {
        width: 60px;
        left: -80px;
        // left: 34%;
      }
      &-statsion {
        display: flex;
        width: 30px;
        left: 50%;
        z-index: 190;
        opacity: 0;
        img {
          width: 100%;
        }
        .human {
          transform: translateX(0px);
        }
      }
    }
    &[data-used='true'] {
      & + .top {
        &:after,
        &:before {
          border: {
            top: 2px;
            right: 2px;
            left: 2px;
            bottom: 0;
            style: solid;
          }
        }
      }
      .bus-obj {
        animation: busMoving 5s ease-in-out;
      }
      .bus-statsion {
        animation: busStation 5s ease-in-out;
        .human {
          animation: busStationHuman 5s ease-in-out;
        }
      }
    }
  }
  &-detail {
    font-size: 14px;
    .label {
      font-size: 12px;
    }
  }
  &-barcode {
    padding: 16px;
    box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 4px 4px;
    line-height: 0;
    img {
      width: 100%;
      border-radius: 2px;
      margin-bottom: 0;
      pointer-events: none;
    }
  }
  &-header {
    font-size: 12px;
    .name {
      font-weight: bold;
      font-size: 16px;
    }
  }
  &-divider {
    margin: 16px 0;
  }
  // 핵심 스타일
  &-cutline {
    position: relative;
    width: 100%;
    height: 16px;
    line-height: 0;
    overflow: hidden;
    &:after,
    &:before {
      content: '';
      position: absolute;
      background-color: transparent;
      width: 32px;
      height: 16px;
      top: 0;
      box-sizing: border-box;
    }
    &.top {
      &:after {
        transform: translateX(-18px);
        border-top-right-radius: 999px;
        left: 0;
      }
      &:before {
        transform: translateX(18px);
        border-top-left-radius: 999px;
        right: 0;
      }
      .perforation {
        border-bottom-width: 1px;
      }
    }
    &.bottom {
      &:after {
        transform: translateX(-18px);
        border-bottom-right-radius: 999px;
        left: 0;
      }
      &:before {
        transform: translateX(18px);
        border-bottom-left-radius: 999px;
        right: 0;
      }
      .perforation {
        border-top-width: 1px;
      }
    }
    // 절취선
    .perforation {
      width: calc(100% - 32px);
      height: 100%;
      position: relative;
      z-index: 2;
      margin: {
        left: 16px;
        right: 16px;
      }
      transition: border-color 0.45s;
      will-change: border-color;
      border: {
        width: 0;
        style: dashed;
        color: transparent;
      }
    }
  }
  // 티켓
  .ticket {
    cursor: pointer;
    transform-origin: top right;
    transition: 1s transform;
    &:hover {
      transform: rotate3d(1, 1, 1, -2deg);
    }
  }
}

@keyframes busMoving {
  0% {
    left: -76px;
  }
  50% {
    left: 44%;
  }
  60% {
    left: 44%;
  }
  100% {
    left: calc(100% + 76px);
  }
}
@keyframes busStation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes busStationHuman {
  50% {
    transform: translateX(10px) scaleY(1);
  }
  59% {
    transform: translateX(10px) scaleY(0.8);
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
`;

export default SCSS_TEMPLATE;
