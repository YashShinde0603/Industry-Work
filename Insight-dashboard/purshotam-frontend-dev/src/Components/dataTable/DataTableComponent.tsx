import { Flex, Text } from '@radix-ui/themes';

interface DataTableCheckBoxDataType {
    titel: string,
    isChecked?: boolean
}

export const DataTableCheckBox: React.FC<DataTableCheckBoxDataType> = ({ titel, isChecked }) => {
    return (
        <Text as="label" size="3" className='text-center'>
            <Flex as="span" gap="2" justify={'center'}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    style={{
                        width: 20,
                        marginRight: 10
                    }}
                />
                {titel}
            </Flex>
        </Text>
    );
};
