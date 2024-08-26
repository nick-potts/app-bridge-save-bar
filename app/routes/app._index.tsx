import {BlockStack, Button, Card, Layout, Page, Tabs, TextField,} from "@shopify/polaris";
import {authenticate} from "../shopify.server";
import {defineLoader} from "@remix-run/server-runtime/dist/single-fetch";
import {useNavigate} from "@remix-run/react";

export const loader = defineLoader(async ({request, context}) => {
  await authenticate.admin(request);

  return null
});


export default function Index() {

  const nav = useNavigate();

  return (
    <Page>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <MyTabs/>

            </Card>
            <Card>
              <Button onClick={() => nav('/app/additional')}>Go to Additional</Button>
              <BlockStack gap="500">
                <form data-save-bar={true}>
                  <TextField label={'enter text here'} autoComplete={'off'}
                  />
                  <TextField
                    label={'or here'} autoComplete={'off'}
                  />
                </form>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}

function MyTabs() {
  return <Tabs fitted={true} selected={0} tabs={[
    {
      id: 'home',
      content: 'Home',
      url: '/app',
      disabled: false,
      selected: true,
    },
    {
      id: 'additional',
      content: 'Additional',
      url: '/app/additional',
      disabled: false,
      selected: false
    }

  ]}/>
}
