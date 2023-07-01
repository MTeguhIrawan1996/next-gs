import { Icon } from '@iconify/react';
import {
  Box,
  Divider,
  Flex,
  Group,
  Image as MantineImage,
  Stack,
  Text,
  TypographyStylesProvider,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import { GSMSBoxWrapper, InnerWrapper } from '@/components/elements';

import { ArticleResponse } from '@/graphql/query/readOneArticle';
import { dateFromat } from '@/utils/helper/dateFormat';
import { rgbDataURL } from '@/utils/helper/imagePlaceholder';

interface IProps {
  data: ArticleResponse;
}

const DetailBeritaBook: React.FC<IProps> = ({ data }) => {
  const { title, publishedAt, dinas, content, featureImage, documents } =
    data.landingPageArticle;

  return (
    <InnerWrapper>
      <GSMSBoxWrapper enableBack>
        <Stack w="100%" spacing="md" px="xs">
          <Text fw={700} fz={24}>
            {title}
          </Text>
          <Group spacing="lg" w="98%" mx="auto">
            <Group spacing={8}>
              <Icon icon="tabler:calendar" fontSize={14} color="#868E96" />
              <Text fw={300} fz={10}>
                {dateFromat(publishedAt, 'dddd, LL')}
              </Text>
            </Group>
            {dinas ? (
              <Group spacing={8}>
                <Icon icon="tabler:building" fontSize={14} color="#868E96" />
                <Text fw={300} fz={10}>
                  {dinas.name}
                </Text>
              </Group>
            ) : null}
          </Group>
          <Box
            h={500}
            w="100%"
            sx={{ borderRadius: '8px', overflow: 'hidden' }}
            pos="relative"
          >
            <Image
              src={featureImage ? featureImage.url : '/'}
              quality={100}
              alt={featureImage ? featureImage.filename : 'not found'}
              fill
              style={{
                objectFit: 'cover',
                backgroundPosition: 'center',
              }}
              placeholder="blur"
              blurDataURL={rgbDataURL(234, 233, 238)}
              sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
            />
          </Box>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
          </TypographyStylesProvider>
          <Divider my={10} opacity={0.5} />
          <Stack spacing="xs">
            <Text fw={700} fz={24}>
              Lampiran
            </Text>
            <Flex gap="sm" wrap="wrap">
              {documents?.map((v, i) => (
                <Link href={v.url} target="_blank" key={i}>
                  <MantineImage
                    height={120}
                    width={120}
                    radius="md"
                    alt="file-image"
                    src="/assets/pdf-icon.png"
                    fit="contain"
                    caption={
                      <Text truncate size="xs" mb={4}>
                        {v.originalFilename}
                      </Text>
                    }
                  />
                </Link>
              ))}
            </Flex>
          </Stack>
        </Stack>
      </GSMSBoxWrapper>
    </InnerWrapper>
  );
};

export default DetailBeritaBook;
