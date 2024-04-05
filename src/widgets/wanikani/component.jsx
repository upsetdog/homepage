import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();

  const { widget } = service;
  const { data: wanikaniData, error: wanikaniError } = useWidgetAPI(widget, "summary");

  if (!wanikaniData || wanikaniError) {
    return <Container service={service} error={wanikaniError} />;
  }

  return (
    <Container service={service}>
      <Block label="Lessons" value={t("common.number", { value: wanikaniData.data.lessons[0].subject_ids.length })} />
      <Block label="Reviews" value={t("common.number", { value: wanikaniData.data.reviews[0].subject_ids.length })} />
    </Container>
  );
}
