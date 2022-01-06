import {
    shallowMount
} from "@vue/test-utils";
import SearchInput from '@/components/SearchInput';

describe('Verify test', () => {
    let wrapper;

    it('verify component', () => {
        wrapper = shallowMount(SearchInput, {
            propsData: {
                value: ''
            }
        })

        expect(wrapper).toBeTruthy()
    })

    it('verify value', async () => {
        wrapper = shallowMount(SearchInput, {
            propsData: {
                value: ''
            }
        })
        expect(wrapper.vm.searchValue).toEqual('');
        wrapper.setProps({
            value: '123'
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.searchValue).toEqual('123');
    })

    it('verify emit', async () => {
        wrapper = shallowMount(SearchInput, {
            propsData: {
                value: ''
            }
        })

        wrapper.find('input[type="text"]').setValue('123')

        expect(wrapper.emitted().input).toBeTruthy()
    })

    it('verify clear emit', async () => {
        wrapper = shallowMount(SearchInput, {
            propsData: {
                value: ''
            }
        })

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted().input).toBeTruthy()
    })
})