import styled from "styled-components";
import { Input, Divider } from "antd";

export const StyledPasswordInput = styled(Input.Password)`
  &.ant-input-password .ant-input::placeholder {
    color: #999 !important;
  }

  &.ant-input-password .ant-input-suffix .anticon {
    color: #999 !important;
  }
`;

export const StyledDivider = styled(Divider)`
  border-color: #cacaca !important;
  border-width: 1px !important;
  color: #cacaca !important;
  font-size: 10px;
`;