import { Form, Input } from "antd";

/**
 * @description: 辅料其他寻源方式类型说明字段
 * @param {AuxiliaryMaterialOtherTypeInstructionProps} props
 * @return {*}
 */
const xx = window._$m.t('你好');
export default function Dashboard() {
  return <div>
      <Form.Item label={window._$m.t('款式详细说明')} required className="label-w-144" name="ingredientsStyleDesc">
        <Input.TextArea maxLength={500} />
      </Form.Item>
      <Form.Item label={window._$m.t('材质详细说明')} required className="label-w-144" name="ingredientsMaterialsDesc">
        <Input.TextArea maxLength={500} />
      </Form.Item>
      <Form.Item label={window._$m.t('尺寸详细说明')} required className="label-w-144" name="ingredientsSizeDesc">
        <Input.TextArea maxLength={500} />
      </Form.Item>
      <div>{window._$m.t('我真的是无语：')}</div>
    </div>;
}